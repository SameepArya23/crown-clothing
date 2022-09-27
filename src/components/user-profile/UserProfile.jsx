import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import "./user-profile.styles.scss";

const UserProfile = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="profile-img">
      <div className="profile-container">
        <div className="txt">
          WELCOME{" "}
          {currentUser.displayName == null
            ? "USER"
            : currentUser.displayName.toUpperCase()}
        </div>
        <div className="txt">You have successfully signed in your account.</div>
        <div className="txt">"HAPPY SHOPPING!"</div>
      </div>
    </div>
  );
};

export default UserProfile;
