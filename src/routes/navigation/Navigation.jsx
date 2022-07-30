import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/User.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/Cart.context";

const Navigation = () => {
  const { currentUser, signOutDropdownOpen, setSignOutDropdownOpen } =
    useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const toggleSignOutDropdown = () =>
    setSignOutDropdownOpen(!signOutDropdownOpen);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className={`nav-link`} onClick={toggleSignOutDropdown}>
              {currentUser.displayName !== null
                ? `Hi ${currentUser.displayName
                    .split(" ")[0]
                    .toUpperCase()}!` || "SIGN-IN"
                : "Hi USER!"}

              {signOutDropdownOpen && (
                <span className="nav-link-dropdown" onClick={signOutUser}>
                  Sign-Out
                </span>
              )}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
