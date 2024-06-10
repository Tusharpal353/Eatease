import "./FoodItem.css";
import { assets } from "../../assets/asset";
import PropTypes from "prop-types";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

function FoodItem({ id, name, image, price, description, rating }) {
  const renderStars = () => {
    const starCount = Math.floor(rating); // Round the average rating to the nearest integer
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Unicode character for a star
    }
    return stars;
  };

  const navigate = useNavigate();

  const navigateToBookingForm = () => {
    navigate("/booking-form");
  };
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p className="food-item-name">{name}</p>

          <div className="stars">
            {renderStars()}
            <p className="food-item-avgrating ">{rating}</p>
          </div>
          {/* <img src={assets.rating} alt="5star" /> */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}/person</p>
        <button
          className="btn-book-table button"
          onClick={navigateToBookingForm}
        >
          <span>Book</span>
        </button>
      </div>
    </div>
  );
}
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default FoodItem;
