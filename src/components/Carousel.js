import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper lg:h-[700px] h-60 "
      >
        <SwiperSlide>
          <div className="flex  justify-center items-center flex-col">
            <div className="w-full lg:h-[700px] h-60 bg-[url('https://bu.edu.bd/buPrev/wp-content/uploads/2023/09/12_2.jpg')] bg-cover bg-center">
              {/* <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
                <span className="text-carousel lg:text-5xl text-lg lg:tracking-tighter  w-2/3 text-center">
                  Welcome to Quazi Azher Ali Programming Contest - 2023
                </span>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  justify-center items-center flex-col">
            <div className="w-full lg:h-[750px] h-60 bg-[url('https://images.unsplash.com/photo-1694532228681-2f6d94c2f768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
              {/* <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
                <span className="text-carousel lg:text-5xl text-lg w-2/3 lg:tracking-tighter text-center">
                  Welcome to Quazi Azher Ali Programming Contest - 2023
                </span>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  justify-center items-center flex-col">
            <div className="w-full lg:h-[750px] h-60 bg-[url('https://images.unsplash.com/photo-1682685796766-0fddd3e480de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
              {/* <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
                <span className="text-carousel lg:text-5xl text-lg w-2/3 lg:tracking-tighter text-center">
                  Welcome to Quazi Azher Ali Programming Contest - 2023
                </span>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  justify-center items-center flex-col">
            <div className="w-full lg:h-[750px] h-60 bg-[url('https://images.unsplash.com/photo-1695531333363-e1d7464c40f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
              {/* <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
                <span className="text-carousel lg:text-5xl text-lg w-2/3 lg:tracking-tighter text-center">
                  Welcome to Quazi Azher Ali Programming Contest - 2023
                </span>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
