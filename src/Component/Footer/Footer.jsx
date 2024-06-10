import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 py-[50px] text-white">
      <div className="container mx-auto px-[20px]">
        <div className="lg:flex justify-between gap-[30px]">
          <div className="flex-1">
            <h2 className="text-3xl font-[600] mb-[20px]">Glory G&P</h2>
            <p>
              Immerse yourself in the magic of paper and glass, curated to
              inspire and adorn. Shop now for artistic wonders!
            </p>
          </div>
          <div className="flex-1 p-[20px]">
            <div className="lg:w-[60%] ml-auto">
              <input
                className="w-full p-[8px] text-black rounded-lg mb-[10px]"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="w-full border border-gray-300  py-[6px] rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="py-[20px]">
          <div className=" text-center">
            <div>
              <h2 className="text-[22px] font-[600] mb-[20px]">Links</h2>
              <div className="space-x-8">
                <Link>About Us</Link>
                <Link>Privacy Policy</Link>
                <Link>Contact Us</Link>
                <Link>Trams & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[40px] flex justify-center items-center space-x-6 text-[30px]">
          <FaFacebook />
          <FaGithub />
          <FaTwitter />
          <FaLinkedin />
        </div>
        <hr />
        <div className="mt-[20px] text-center">
          <p>This site Copyright&copy; Ruhit Baidya 2024 alright reseverd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
