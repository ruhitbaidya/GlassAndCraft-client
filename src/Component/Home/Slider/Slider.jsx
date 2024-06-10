// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[400px] w-full bg-cover bg-[url('https://i.ibb.co/WyjpvMV/slider3.jpg')]">
            <div className="bg-colors-custom flex justify-center items-center">
              <div className="lg:w-[50%] mx-auto text-white space-y-4">
                <h2 className="text-[30px] lg:text-[45px]">Artistry in Motion</h2>
                <p>Discover the delicate dance of paper and glass, where creativity meets craftsmanship. Explore our collection now!</p>
                <button className="border border-gray-50 px-[35px] py-[8px] rounded-lg">Explore More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[400px] w-full bg-cover bg-[url('https://i.ibb.co/4MpmjqQ/slider2.jpg')]">
            <div className="bg-colors-custom flex justify-center items-center">
              <div className="lg:w-[50%] mx-auto text-white space-y-4">
                <h2 className="text-[30px] lg:text-[45px]">Elegance Redefined</h2>
                <p>Transform your space with intricate paper crafts and mesmerizing glass art. Elevate your décor with our unique pieces.</p>
                <button className="border border-gray-50 px-[35px] py-[8px] rounded-lg">Explore More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[400px] w-full bg-cover bg-[url('https://i.ibb.co/3mcc93P/slider1.jpg')]">
            <div className="bg-colors-custom flex justify-center items-center">
              <div className="lg:w-[50%] mx-auto text-white space-y-4">
                <h2 className="text-[30px] lg:text-[45px]">Crafting Dreams</h2>
                <p className="text-[]">Immerse yourself in the magic of paper and glass, curated to inspire and adorn. Shop now for artistic wonders!</p>
                <button className="border border-gray-50 px-[35px] py-[8px] rounded-lg">Explore More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


// https://i.ibb.co/WyjpvMV/slider3.jpg
// https://i.ibb.co/4MpmjqQ/slider2.jpg
// https://i.ibb.co/3mcc93P/slider1.jpg