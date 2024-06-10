import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="text-center h-screen flex items-center justify-center">
        <div className="space-y-8">
          <h2 className="text-[120px] font-[700]">404</h2>
          <p className="text-[40px] font-[600]">Page Not Fount!</p>
          <Link  to="/">
            <button className="border border-gray-50 px-[35px] py-[10px] mt-[30px]">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
