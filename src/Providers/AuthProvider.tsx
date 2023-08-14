import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth/cordova";
import { ReactNode, createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
interface AuthInfo {
  user: any;
  loginUser: any;
  createUserEmail: any;
  logOut: any;
  loading: boolean;
}
export const AuthContext = createContext<AuthInfo | null>(null);
const auth = getAuth(app);
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

  // logout user

  const logOut = () => {
    return signOut(auth);
  };

  // current user save

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo: AuthInfo = {
    user,
    createUserEmail,
    loginUser,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
