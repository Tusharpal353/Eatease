import './ExploreMenu.css'
import {menu_list} from '../../assets/asset'
import PropTypes from 'prop-types';
function ExploreMenu({category,setCategory}) {
  return (
    <div className="explore-menu" id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptas sapiente pariatur distinctio beatae vero quidem, rerum neque autem, fuga eum corrupti nemo et quos earum culpa rem minima! Nemo.</p>
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