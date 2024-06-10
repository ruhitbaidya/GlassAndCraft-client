import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const ClientReview = () => {
  return (
    <div>
      <div className="py-[50px]">
        <div className="container mx-auto px-[20px]">
          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="space-y-4">
                    <div className="flex justify-center items-center">
                    <img className="cilent-img" src="https://i.ibb.co/LSTGdR4/women4.jpg" alt="" />
                    </div>
                    <div >
                        <h2 className="text-2xl font-[600]">Emily</h2>
                        <p className="text-[14px] font-[400]">Absolutely amazed by the intricate paper designs! Exquisite craftsmanship!</p>
                        <div className="flex justify-center items-center mt-[10px] text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="space-y-4">
                    <div className="flex justify-center items-center">
                    <img className="cilent-img" src="https://i.ibb.co/Nx2LCrq/women3.jpg" alt="" />
                    </div>
                    <div >
                        <h2 className="text-2xl font-[600]">Isabella</h2>
                        <p className="text-[14px] font-[400]">Paper crafts and glass art elevated our event decor. Impressed beyond words!</p>
                        <div className="flex justify-center items-center mt-[10px] text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="space-y-4">
                    <div className="flex justify-center items-center">
                    <img className="cilent-img" src="https://i.ibb.co/bvFQdc5/men3.webp" alt="" />
                    </div>
                    <div >
                        <h2 className="text-2xl font-[600]">Noah</h2>
                        <p className="text-[14px] font-[400]">Such creativity and talent! Our guests couldnt stop admiring the crafts.</p>
                        <div className="flex justify-center items-center mt-[10px] text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="space-y-4">
                    <div className="flex justify-center items-center">
                    <img className="cilent-img" src="https://i.ibb.co/Bfh5v1F/men2.jpg" alt="" />
                    </div>
                    <div >
                        <h2 className="text-2xl font-[600]">William</h2>
                        <p className="text-[14px] font-[400]">Incredible attention to detail in both paper and glass creations. Highly recommend!</p>
                        <div className="flex justify-center items-center mt-[10px] text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="space-y-4">
                    <div className="flex justify-center items-center">
                    <img className="cilent-img" src="https://i.ibb.co/N3xGx2d/men1.jpg" alt="" />
                    </div>
                    <div >
                        <h2 className="text-2xl font-[600]">Mason</h2>
                        <p className="text-[14px] font-[400]">The glass art added a touch of elegance to our space. Stunning!</p>
                        <div className="flex justify-center items-center mt-[10px] text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
