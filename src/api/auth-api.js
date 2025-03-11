import { auth, db } from './../core/firebaseConfig'; // Import Firebase instances
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// ✅ Sign Up (Stores user in Firestore with `approved: false`)
export async function signUpUser({ name, email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    // Save user in Firestore with `approved: false`
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      approved: false, // Default approval status
      createdAt: new Date(),
    });

    return { user };
  } catch (error) {
    return { error: error.message };
  }
}

// ✅ Login (Checks if the user is approved)
export async function loginUser({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Check approval status
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists() && !userDoc.data().approved) {
      return { error: 'Your account is pending admin approval.' };
    }

    return { user };
  } catch (error) {
    return { error: error.message };
  }
}

// ✅ Reset Password
export async function sendResetEmail(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { message: 'Password reset email sent.' };
  } catch (error) {
    return { error: error.message };
  }
}
