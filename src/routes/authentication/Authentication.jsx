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
import { UserContext } from "../../contexts/User.context";
import { Fragment, useContext } from "react";
import UserProfile from "../../components/user-profile/UserProfile";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="authentication-container">
      {currentUser ? (
        <UserProfile />
      ) : (
        <Fragment>
          <SignInForm />
          <SignUpForm />
        </Fragment>
      )}
    </div>
  );
};

export default Authentication;
