import { useContext } from "react";
import { UserContext } from "../../AuthContext/AuthContext";
import Swal from 'sweetalert2'
const AddCraft = () => {
  const {user} = useContext(UserContext);
  console.log(user)
  const handelDataProduct = (e)=>{
      e.preventDefault();
      const form = e.target;

     const  name = form.name.value;
     const  image = form.image.value;
     const  subcategory_Name = form.subcategory_Name.value;
     const  price = form.price.value;
     const  rating = form.rating.value;
     const  customization = form.customization.value;
     const  times = form.times.value;
     const  stock_status = form.stock_status.value;
     const  description = form.description.value;
     const email = user.email;
     const username = user.displayName;
      const infos = {name, image, subcategory_Name, price, rating, customization, times, stock_status, description, email, username}
      console.log(infos)
    fetch("https://ruhit-server.vercel.app/createProduct", {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(infos)
    })
    .then((res)=> res.json())
    .then((data)=> {
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Successfully Add Product',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        form.reset()
      }
    } )
  }


  return (
    <div>
      <div className="container mx-auto px-[20px] my-[100px]">
        <div className="lg:w-[70%] mx-auto bg-blue-300 p-[20px]">
          <h2 className="text-3xl text-center font-[600] mb-[20px]">
            Add Product
          </h2>
          <form onSubmit={handelDataProduct}>
            <div className="">
              <div className="lg:flex gap-[25px] mb-[10px]">
                <div className="flex-1">
                  <label htmlFor=""> Name</label>
                  <input
                  required
                    className="w-full p-[10px]"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor=""> Image Url</label>
                  <input
                  required
                    className="w-full p-[10px]"
                    name="image"
                    type="text"
                    placeholder="Image Url"
                  />
                </div>
              </div>

              <div className="lg:flex gap-[25px]">
                <div className="flex-1">
                  <label>Subcategory Name</label>
                  <select className="w-full p-[10px]" required name="subcategory_Name">
                    <option>--Select--</option>
                    <option value="card_Making">Card Making</option>
                    <option value="scrapbooking">Scrapbooking</option>
                    <option value="paper_Quilling">
                      {" "}
                      Paper Quilling & origami
                    </option>
                    <option value="glass_Painting"> Glass Painting</option>
                    <option value="lampworking">Lampworking</option>
                    <option value="glass_Dying">Glass Dying & Staining</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor=""> Price</label>
                  <input
                  required
                    className="w-full p-[10px]"
                    name="price"
                    type="text"
                    placeholder="Price"
                  />
                </div>
              </div>

              <div className="lg:flex gap-[25px] mb-[10px]">
                <div className="flex-1">
                  <label htmlFor=""> Rating</label>
                  <input
                  required
                    className="w-full p-[10px]"
                    name="rating"
                    type="text"
                    placeholder="Rating"
                  />
                </div>
                <div className="flex-1">
                  <label>Customization:</label>
                  <select className="w-full p-[10px]" required name="customization">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div className="lg:flex gap-[25px] mb-[10px]">
                <div className="flex-1">
                  <label htmlFor="">Processing Time</label>
                  <input
                  required
                    className="w-full p-[10px]"
                    name="times"
                    type="text"
                    placeholder="Processing Time"
                  />
                </div>
                <div className="flex-1">
                  <label>Stock Status</label>
                  <select
                  className="w-full p-[10px]"
                    name="stock_status"
                    required
                  >
                    <option value="In stock">In stock</option>
                    <option value="Made to Order">Made to Order</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="">Description</label>
                <textarea required  className="w-full p-[10px]" placeholder="Description" name="description" id="" cols="30" rows="5"></textarea>
              </div>

              <div className="mt-[10px]">
                <button className="w-full py-[10px] bg-blue-900 text-white">Add</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;
