import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllCraft = () => {
  const [allitem, setAllitem] = useState([])
  useEffect(() => {
    fetch("https://ruhit-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setAllitem(data));
  }, []);
  return (
    <div className="container mx-auto px-[20px] py-[50px]">
    <h3 className="lg:text-3xl font-[700] ">All Paper Crafts & Glass Art</h3>
    <hr className="mb-[30px] mt-[10px] border-[2px] border-blue-950 w-[10%]" />
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subcategory Name</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            allitem.map((item)=> <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.subcategory_Name}</td>
              <td>{item.price}</td>
              <td>{item.stock_status}</td>
              <td>
                <Link to={`/pagedetails/${item._id}`}>
                  <button>View Details</button>
                </Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default AllCraft