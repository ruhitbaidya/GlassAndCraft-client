import PropType from "prop-types"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const CraftItems = ({paper}) => {
  return (
    <div className="container mx-auto px-[20px] py-[50px]">
      <h3 className="lg:text-3xl font-[700] "> Paper Crafts & Glass Art</h3>
      <hr className="mb-[30px] mt-[10px] border-[2px] border-blue-950 w-[10%]" />
      <div className="grid lg:grid-cols-3 gap-[24px]">
        {paper && paper.slice(0, 6).map((item) => (
          <div
            key={item._id}
            className="card border border-gray-400 rounded-[0px] p-[5px]"
          >
            <div>
              <img
                className="w-full h-[200px] lg:h-[250px] object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div>
              <h2 className="lg:text-2xl font-[700] text-center my-[15px]">
                {item.name}
              </h2>
            </div>
            <div className="flex justify-between bg-gray-300 p-[20px]">
              <div>
                <p>Price : ${item.price}</p>
              </div>
              <div>
                <p className="flex items-center gap-[5px]">
                  <FaStar className="text-yellow-500" /> {item.rating}
                </p>
              </div>
            </div>
            <div>
              <Link to={`/pagedetails/${item._id}`}>
                <button className="bg-blue-950 w-full text-white py-[10px]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CraftItems.propTypes = {
  paper : PropType.array
}
export default CraftItems;
