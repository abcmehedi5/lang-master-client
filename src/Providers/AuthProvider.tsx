import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider, getAuth } from "firebase/auth/cordova";
import { ReactNode, createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

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
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // current user save
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
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
