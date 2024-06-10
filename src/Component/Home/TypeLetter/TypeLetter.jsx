import { Typewriter } from "react-simple-typewriter";
import "./style.css"
const TypeLetter = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/yfR5X4g/images-WOrke.jpg')] bg-no-repeat bg-cover bg-center  ">
      <div className="colors-type py-[50px] lg:py-[150px]">
        <div className="container mx-auto px-[20px]">
          <p className="text-center lg:text-5xl text-white">
            Our Work{" "}
            <Typewriter
              words={[
                "Card Making",
                "Scrapbooking",
                "Paper Quilling & origami",
                " Glass Painting",
                " Lampworking",
                "Glass Dying & Staining",
              ]}
              loop={20}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypeLetter;
