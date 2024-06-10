import './ExploreMenu.css'
import {menu_list} from '../../assets/asset'
import PropTypes from 'prop-types';
function ExploreMenu({category,setCategory}) {
  return (
    <div className="explore-menu" id='explore-menu'>
      <h1>Explore Our Restaurants</h1>
      <p className='explore-menu-text'>
Explore our wide variety of restaurants to satisfy all your culinary needs, whether you are looking for a quick bite, a leisurely meal with family, or a fine dining experience to celebrate a special occasion. We have options that cater to every taste and preference!</p>
      <div className="explore-menu-list">
        {
        menu_list.map((item,index)=>{
          return (<div className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
            <img src={item.menu_image} alt="..." className={category===item.menu_name?"active":""} />
            <p>{item.menu_name}</p>
            <hr />
          </div>)
        })
      }
      </div>
    </div>
  )
}
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
};
export default ExploreMenu