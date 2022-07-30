import { useContext } from "react";
import { UserContext } from "../../contexts/User.context";
import "./user-profile.styles.scss";

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="profile-img">
      <div className="profile-container">
        <div className="txt">
          WELCOME {currentUser.displayName.toUpperCase() || "USER"}
        </div>
        <div className="txt">You have successfully signed in your account.</div>
        <div className="txt">"HAPPY SHOPPING!"</div>
      </div>
    </div>
  );
};

export default UserProfile;
