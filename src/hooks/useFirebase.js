import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogIn/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  //sign In With Email And Password  start

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 character long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 uppercase.");
      return;
    }
    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };
  //process Register

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Set user name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  // Verify Email

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };
  //Reset Password

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {
      console.log(result);
    });
  };

  //process Login
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //Email change

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //password Change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //Toggle LogIn
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  //sign In With Email And Password  end

  //google signIn
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  //observer

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    error,
    isLogin,
    toggleLogin,
    handleResetPassword,
    handleNameChange,
  };
};

export default useFirebase;
