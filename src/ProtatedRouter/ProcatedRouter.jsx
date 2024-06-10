import { useContext } from "react"
import { UserContext } from "../AuthContext/AuthContext"
import PropType from "prop-types"
import { Navigate, useLocation } from "react-router-dom";

const ProtectRouter = ({children}) => {
  const pages = useLocation();
  console.log(pages.pathname)
    const {loading, user} = useContext(UserContext);
  if(loading){
     return <div className="h-[90vh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
    </div>
  }
  return user ? children : <Navigate state={pages.pathname} to="/login" /> 
}

ProtectRouter.propTypes = {
    children : PropType.node
}
export default ProtectRouter