import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom"

const CategoryItems = () => {
    const findslug = useParams();
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`https://ruhit-server.vercel.app/categoryFind/${findslug.id}`)
        .then((res)=> res.json() )
        .then((data)=> setData(data) )
    }, [])
  return (
    <div className="my-[50px]"> 
        <div className="container mx-auto px-[20px]">
            <div className="grid lg:grid-cols-3 gap-[25px]">
                {
                    data.map((item)=> <div
                    key={item._id}
                    className="card border border-gray-400 rounded-[0px]"
                  >
                    <div>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-[700] text-center my-[15px]">
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
                  </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default CategoryItems