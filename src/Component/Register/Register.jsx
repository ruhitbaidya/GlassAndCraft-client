
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { UserContext } from "../../AuthContext/AuthContext";
const Register = () => {
  const navigate = useNavigate();
  const {registerUser, EditProfile} = useContext(UserContext)
  const handelSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if(!/[A-Z]/.test(password)){
      toast.error("You Must Give An Uppercase")
      return;
    }
    if(!/[a-z]/.test(password)){
      toast.error("You Must Give An Lowercase")
      return;
    }
    if(password.length < 6){
      toast.error("You Must Give 6 charcter password")
      return;
    }

    registerUser(email, password)
    .then(()=> {
      EditProfile({
          displayName: name, 
          photoURL: photo
        })
        .then(()=> {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully Register You Account',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          form.reset();
          navigate("/");
          window.location.reload();
        })
        .catch((err)=>{
          console.log(err)
        })
  })
    .catch((err)=> {
      form.reset()
      Swal.fire({
        title: 'Error!',
        text: err.message.split(":")[1],
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })
    
  }
  return (
    <div className="py-[50px]">
      <ToastContainer />
      <div className="container mx-auto lg:px-[20px]">
        <div>
          <div className="bg-blue-950 p-[20px] lg:p-[50px] lg:w-[40%] mx-auto rounded-lg text-white">
            <form onSubmit={handelSubmit}>
              <div>
                <h2 className="text-[25px] font-[700] text-center mb-[20px]">
                  Register
                </h2>
                <div className="mt-[30px]">
                  <label className="font-[600]" htmlFor="email">
                    Name
                  </label>
                  <div className="">
                    <input
                      className="w-full p-[10px]  bg-transparent border-b-2 border-gray-50 focus:outline-none"
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div className="mt-[30px]">
                  <label className="font-[600]" htmlFor="email">
                    Email
                  </label>
                  <div className="">
                    <input
                      className="w-full p-[10px]  bg-transparent border-b-2 border-gray-50 focus:outline-none"
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="mt-[30px]">
                  <label className="font-[600]" htmlFor="url">
                    Photo URL
                  </label>
                  <div className="">
                    <input
                      className="w-full p-[10px]  bg-transparent border-b-2 border-gray-50 focus:outline-none"
                      name="photo"
                      type="url"
                      placeholder="Enter Your Photo URL"
                    />
                  </div>
                </div>
                <div className="mt-[30px]">
                  <label className="font-[600]" htmlFor="email">
                    Password
                  </label>
                  <div className="">
                    <input
                      className="w-full p-[10px]  bg-transparent border-b-2 border-gray-50 focus:outline-none"
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                  </div>
                </div>
                
                <div className="mt-[40px]">
                  <button className="w-full py-3 border border-gray-50 rounded-full hover:bg-white hover:text-black">
                    Register
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-[30px] text-center">
              If You Have an Account Please
              <Link to="/login">
                <span className="text-center font-[600] ml-[5px]">Login </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
