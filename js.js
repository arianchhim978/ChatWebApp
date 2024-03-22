import { initializeApp } from "firebase/app";

const firebaseConfig = const firebaseConfig = {
  apiKey: "AIzaSyCkOJpbiWH5GlBcocoZZOvtA6Tkz_4Dq0Q",
  authDomain: "chatapp-cf3da.firebaseapp.com",
  projectId: "chatapp-cf3da",
  storageBucket: "chatapp-cf3da.appspot.com",
  messagingSenderId: "960484462187",
  appId: "1:960484462187:web:4f009da751779aaccbeb2e",
  measurementId: "G-ZJ953Z1X8J"
};

;
const app = initializeApp(firebaseConfig);
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();
signInWithPopup(auth,provider)
.then((result)=>{
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
})
.catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.errorMessage;
  const email = error.customData.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
});

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
