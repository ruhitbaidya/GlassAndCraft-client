import PropType from "prop-types"
import "./style.css"
import { Link } from "react-router-dom";
const ViewCategory = ({category}) => {
  
  return (
    <div>
      <div className="container mx-auto px-[20px] my-[50px]">
      <h3 className="lg:text-3xl font-[700] "> Art & Craft Categories</h3>
      <hr className="mb-[30px] mt-[10px] border-[2px] border-blue-950 w-[10%]" />
      
        <div className="grid lg:grid-cols-3 gap-[25px]">
          {
           category && category.map((item)=> <Link key={item._id} to={`/category/${item.catgory}`}>
            <div  className="containers">
            <div className="content">
              
                <div className="content-overlay"></div>
                <img
                  className="w-full h-[300px] object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="content-details fadeIn-top fadeIn-right">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
            
            </div>
          </div>
            </Link>)
          }
        </div>
      </div>
    </div>
  );
};


ViewCategory.propTypes = {
  category : PropType.array
}

export default ViewCategory;
