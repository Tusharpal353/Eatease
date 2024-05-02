import './FoodItem.css'
import { assets } from '../../assets/asset'
import PropTypes from 'prop-types'

function FoodItem({name,image,price,description}) {
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">  
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating} alt="" />
        </div>
        <p className='food-item-desc'>
          {description}
        </p>
        <p className="food-item-price">
          ${price}
        </p>
      </div>
    </div>
  )
}
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default FoodItem
