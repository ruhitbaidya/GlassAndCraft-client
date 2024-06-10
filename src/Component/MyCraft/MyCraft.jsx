import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { UserContext } from "../../AuthContext/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyCraft = () => {
  const { user } = useContext(UserContext);
  const [selfdata, setSelfData] = useState([]);
  const [datasort, setdataSort] = useState(selfdata)
  const email = user.email;

  useEffect(() => {
    fetch(`https://ruhit-server.vercel.app/selfUser/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setSelfData(data) 
        setdataSort(data)});
  }, []);
  const deleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ruhit-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const datas = selfdata.filter((item) => item._id !== id);
              setSelfData(datas);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  
  const handelFilter = (e)=>{
    if(e.target.value === "all"){
      const fiyes = selfdata.filter((item)=> item.customization !== "")
      setdataSort(fiyes)
    }
    if(e.target.value === "yes"){
      const fiyes = selfdata.filter((item)=> item.customization !== "no")
      setdataSort(fiyes)
    }
    if(e.target.value === "no"){
      const fiyes = selfdata.filter((item)=> item.customization !== "yes")
      setdataSort(fiyes)
    }
  }

  return (
    <div>
      <div className="py-[50px]">
        <h2 className="text-center lg:text-3xl font-[600]">
          {" "}
          My Art&Craft Product List
        </h2>
        <div className="text-center mt-[50px]">
          <select onChange={handelFilter} className="select select-primary w-full max-w-xs">
          <option disabled selected>--Select--</option>
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto px-[20px] my-[50px]">
        <div className="lg:w-[60%] mx-auto">
          {datasort.map((item) => (
            <div key={item._id} className="card mb-[20px] p-[30px] bg-gray-200">
              <div className="lg:flex-row gap-[25px] items-center">
                <div className="flex-1 flex justify-center items-center">
                  <img
                    className="rounded-lg h-[200px] lg:h-[300px] w-full"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-[18px] lg:text-3xl font-[600]">
                    {item?.name || "name"}
                  </h2>
                  <p className="text-[18px] font-[400] my-[10px]">
                    {item?.description || "name"}
                  </p>
                  <div className="lg:flex gap-[25px] justify-between my-[10px]">
                    <div>
                      <p className="p-[10px] rounded-lg  text-[18px] font-[400] ">
                        Customize : {item?.customization || "name"}
                      </p>
                    </div>
                    <div>
                      <p className="p-[10px] rounded-lg  text-[18px] font-[400] ">
                        Stock : {item?.stock_status || "name"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="p-[10px] rounded-lg  text-[18px] font-[400] ">
                      Processing Time {item?.times || "name"} days
                    </p>
                  </div>
                  <div className="lg:flex gap-[25px] justify-between my-[10px]">
                    <div className="flex-1">
                      <p className="p-[10px] rounded-lg  text-[18px] font-[400] ">
                        Price : ${item?.price || "name"}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="p-[10px] flex items-center gap-[10px] rounded-lg  text-[18px] font-[400] text-center">
                        <div className="flex text-yellow-400">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>{" "}
                        {item?.rating || "12"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[25px] justify-between my-[10px]">
                    <div className="flex-1">
                      <Link to={`/update/${item._id}`}>
                        <button className="bg-green-500 text-white w-full py-[8px]">
                          Edit
                        </button>
                      </Link>
                    </div>
                    <div className="flex-1">
                      <button
                        onClick={() => deleteData(item._id)}
                        className="bg-red-500 text-white w-full py-[8px]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCraft;
