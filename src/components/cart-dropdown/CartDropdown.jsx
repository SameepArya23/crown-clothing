import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/Cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, isCartOpen } = useContext(CartContext);

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/checkout");
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
