import { useContext } from "react";
import { FaRegUser, FaKey, FaGoogle, FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import Swal from 'sweetalert2'
const Login = () => {
  const locatepath = useLocation();
  const navigate = useNavigate()
  console.log(locatepath.state)
  const {loginemailpass, singinGooglePopup, githubLogin, setLoading} = useContext(UserContext);
  const handelLogin = (e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log(email, password);
      loginemailpass(email, password)
      .then(()=>{
        setTimeout(()=>{
          navigate(locatepath.state || "/")
        }, 3000)
        Swal.fire({
          title: 'Success!',
          text: 'Successfull Login',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        form.reset()
      })
      .catch((err)=>{
        setLoading(false)
        Swal.fire({
          title: 'Error!',
          text: err.message.split(":")[1],
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }
  const googlelogin = ()=>{
    singinGooglePopup()
    .then(()=>{
      Swal.fire({
        title: 'Success!',
        text: "Login Successfull",
        icon: 'success',
        confirmButtonText: 'OK'
      })
      setTimeout(()=>{
        navigate(locatepath.state || "/")
      }, 3000)
    })
    .catch((err)=>{
      setLoading(false)
      Swal.fire({
        title: 'Error!',
        text: err.message.split(":")[1],
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      console.log(err)
    })
  }
  const githubAuthLog = ()=>{
    githubLogin()
    .then(()=>{
      Swal.fire({
        title: 'Success!',
        text: "Login Successfull",
        icon: 'success',
        confirmButtonText: 'OK'
      })
      setTimeout(()=>{
        navigate(locatepath.state || "/")
      }, 3000)
    })
    .catch((err)=>{
      setLoading(false)
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
      <div className="container mx-auto lg:px-[20px]">
        <div>
          <div className="bg-blue-950 p-[20px] lg:p-[50px] lg:w-[40%] mx-auto rounded-lg text-white">
            <form onSubmit={handelLogin}>
              <div>
                <h2 className="text-[25px] font-[700] text-center mb-[20px]">
                  Login
                </h2>
                <div>
                  <label className="font-[600]" htmlFor="email">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      className="w-full p-[10px] pl-[25px] bg-transparent border-b-2 border-gray-50 focus:outline-none"
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <span className="absolute top-4 left-0">
                      <FaRegUser />
                    </span>
                  </div>
                </div>
                <div className="mt-[30px]">
                  <label className="font-[600]" htmlFor="email">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full p-[10px] pl-[25px] bg-transparent border-b-2 border-gray-50 focus:outline-none"
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                    <span className="absolute top-4 left-0">
                      <FaKey />
                    </span>
                  </div>
                  <Link>
                    <p className="text-right mt-[5px]">Forgot Password?</p>
                  </Link>
                </div>
                <div className="mt-[40px]">
                  <button className="w-full py-3 border border-gray-50 rounded-full hover:bg-white hover:text-black">
                    Login
                  </button>
                </div>
              </div>
            </form>
       
            <div className="mt-[30px] text-center space-x-6 text-[30px]">
                
              <button onClick={googlelogin}>
                <FaGoogle />
              </button>
              <button onClick={githubAuthLog}>
                <FaGithub />
              </button>
            </div>
            <div className="mt-[30px] text-center">
                If You Have No Account Please
                <Link to="/register">
                    <span className="text-center font-[600] ml-[5px]">SignUp </span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
