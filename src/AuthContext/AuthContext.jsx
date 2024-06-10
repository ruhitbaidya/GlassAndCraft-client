import { createContext, useEffect, useState } from "react";
import PropType from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase";

export const UserContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singinGooglePopup = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const loginemailpass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const githubLogin = () => {
    setLoading(true)
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const EditProfile = (info) => {
    setLoading(true)
    console.log(info);
    return updateProfile(auth.currentUser, info);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsecribe = onAuthStateChanged(auth, (person) => {
      setUser(person);
      setLoading(false);
    });
    return () => {
      unsecribe();
    };
  }, []);

  const info = {
    registerUser,
    EditProfile,
    user,
    loading,
    setLoading,
    logout,
    loginemailpass,
    singinGooglePopup,
    githubLogin,
  };
  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

AuthContext.propTypes = {
  children: PropType.node,
};
export default AuthContext;
