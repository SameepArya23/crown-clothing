import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };
  return (
    <div
      className={`cart-dropdown-container ${
        isCartOpen ? "open-cart" : "close-cart"
      }`}
    >
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItems={cartItem} />;
          })
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <Button onClick={navigateHandler}>go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
