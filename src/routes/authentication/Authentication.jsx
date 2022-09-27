import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";
import "./authentication.styles.scss";
import { Fragment } from "react";
import UserProfile from "../../components/user-profile/UserProfile";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
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
