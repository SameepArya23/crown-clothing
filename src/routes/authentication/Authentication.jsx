/*
# IMPORTING SOME FUNCTIONS TO USE THE REDIRECT METHOD(includes{ auth, signInWithGoogleRedirect })
 import { useEffect } from "react";
 import { getRedirectResult } from "firebase/auth";
*/
import // auth,
// signInWithGooglePopup,
// signInWithGoogleRedirect,
// createUserDocumentFromAuth,
"../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";
import "./authentication.styles.scss";

const Authentication = () => {
  /*
    # SIGN-IN WITH REDIRECT METHOD.
     useEffect(() => {
       (async () => {
         const response = await getRedirectResult(auth);
         if (response) {
           const userDocRef = createUserDocumentFromAuth(response.user);
         }
       })();
     }, []);
*/

  return (
    <div className="authentication-container">
      {/* # implement the redirect method. 
      <button onClick={signInWithGoogleRedirect}>
        sign-in with Google redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
