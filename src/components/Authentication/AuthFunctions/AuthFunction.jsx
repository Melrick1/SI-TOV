import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, setDoc, query, where, doc } from 'firebase/firestore';
import { Auth, DB } from '../../../Firebase.js';

{/* User Authentication */}
const Authenticate  = async (email, password, navigate, setErrorMessage) => {
  try {
    // Sign in with email and password
    const userCredential = await signInWithEmailAndPassword(Auth, email, password);

    navigate('/dashboard')
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
};

{/* SignUp */}
const SignUp = async (Name, email, password1, setErrorMessage) => {
  try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(Auth, email, password1);

      const docName = email

      // Update user profile with data
      await setDoc(doc(collection(DB, 'users'), docName), {
          uid: userCredential.user.uid,
          NamaToko: Name,
      });

      // Registered successfully
      setErrorMessage("Sign Up Berhasil")
      console.log("Sign Up Berhasil")
  }
  catch (error) {
    ErrorHandler(error, setErrorMessage);
  }
}

{/* Error Handler */}
const ErrorHandler = (error, setErrorMessage) => {
  switch(error.code){
    case 'auth/invalid-email':
      setErrorMessage("Format Email salah");
      break;
    case 'auth/email-already-in-use':
      setErrorMessage("Email sudah dipakai");
      break;
    case 'auth/missing-password':
      setErrorMessage("Password tidak boleh kosong")
      break
    case 'auth/weak-password':
      setErrorMessage("Password anda lemah");
      break;
    case 'auth/invalid-credential':
      setErrorMessage("Email atau Password salah");
      break;
    default:
      setErrorMessage("Terjadi kesalahan");
      console.log(error.message)
      break;
  }
}

export { Authenticate, SignUp };