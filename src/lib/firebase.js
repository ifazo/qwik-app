import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../firebase.config";

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        unsubscribe();
        resolve(user);
      },
      (error) => reject(error)
    );
  });
};

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOut = () => {
  return auth.signOut();
};

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGithub = () => {
  return signInWithPopup(auth, githubProvider);
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};