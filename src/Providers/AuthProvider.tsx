// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { ReactNode, createContext, useEffect, useState } from "react";
// import app from "../Firebase/firebase.config";
// import axios from "axios";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// interface AuthInfo {
//   user: any;
//   createUserEmail: (email: string, password: string) => Promise<any>;
//   loginUser: (email: string, password: string) => Promise<any>;
//   logingoogle: any;
//   updateUserProfile: (name: string, photo: any) => Promise<any>;
//   logOut: () => any;
//   loading: boolean;
// }

// export const AuthContext = createContext<AuthInfo | null>(null);

// const auth = getAuth(app);
// const googleprovider = new GoogleAuthProvider();

// const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [axiosSecure] = useAxiosSecure();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   // create user email and password
//   const createUserEmail = (email: any, password: any) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   //   login user email and password
//   const loginUser = (email: any, password: any) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // login with google popup
//   const logingoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleprovider);
//   };

//   // logout user
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // update user profile
//   const updateUserProfile = (name: string, photo: any) => {
//     const currentUser: any = auth.currentUser;
//     return updateProfile(currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };

//   // current user save
//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
//   //     setUser(currentUser);
//   //     if (currentUser) {
//   //       axios.post("https://lang-master-server-abcmehedi5.vercel.app/json-web-token/jwt").then((data) => {
//   //         console.log(data);
//   //         localStorage.setItem("access-token", data.data.token);
//   //         setLoading(false);
//   //       });
//   //     } else {
//   //       localStorage.removeItem("access-token");
//   //       setLoading(false);
//   //     }
//   //   });
//   //   return () => {
//   //     return unsubscribe();
//   //   };
//   // }, []);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
//       setUser(currentUser);
//       if (currentUser) {
//         axios
//           .post("https://lang-master-server-abcmehedi5.vercel.app/json-web-token/jwt")
//           .then((response) => {
//             console.log(response);
//             localStorage.setItem("access-token", response.data.token);
//             setLoading(false);
//           })
//           .catch((error) => {
//             // Handle any errors that occur during the POST request.
//             console.error("Error while generating JWT:", error);
//             setLoading(false); // Make sure to set loading to false even on error.
//           });
//       } else {
//         localStorage.removeItem("access-token");
//         setLoading(false);
//       }
//     });

//     // Return a cleanup function to unsubscribe from the onAuthStateChanged observer.
//     return () => {
//       unsubscribe(); // Invoke the unsubscribe function to stop observing changes.
//     };
//   }, []);

//   const authInfo: AuthInfo = {
//     user,
//     createUserEmail,
//     loginUser,
//     logingoogle,
//     updateUserProfile,
//     logOut,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";

interface AuthInfo {
  user: any;
  createUserEmail: (email: string, password: string) => Promise<any>;
  loginUser: (email: string, password: string) => Promise<any>;
  logingoogle: any;
  updateUserProfile: (name: string, photo: any) => Promise<any>;
  logOut: () => any;
  loading: boolean;
}

export const AuthContext = createContext<AuthInfo | null>(null);

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user email and password
  const createUserEmail = (email: any, password: any) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user email and password
  const loginUser = (email: any, password: any) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google popup
  const logingoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user profile
  const updateUserProfile = (name: string, photo: any) => {
    const currentUser: any = auth.currentUser;
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // current user save
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
      if (currentUser) {
        axios.post("https://lang-master-server-abcmehedi5.vercel.app/json-web-token/jwt").then((data) => {
          localStorage.setItem("access-token", data.data.token);
          setLoading(false);
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo: AuthInfo = {
    user,
    createUserEmail,
    loginUser,
    logingoogle,
    updateUserProfile,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
