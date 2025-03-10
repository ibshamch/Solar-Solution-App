// Here i will put my all auth methods for firebase

import firebase from 'firebase/compat/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

// Sign Up Method
// Before this enable email-pass from auth sign in providers in google firebase

export async function signUpUser({ name, email, password }) {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    return { user };
  } catch (error) {
    return { error: error.message };
  }
}

export async function loginUser({ email, password }) {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
}

export async function sendResetEmail(email) {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    return { message: 'Password reset email sent.' };
  } catch (error) {
    return { error: error.message };
  }
}
