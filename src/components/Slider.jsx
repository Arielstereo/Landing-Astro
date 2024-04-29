import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div className="w-full h-[320px] md:h-[480px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero pt-48 text-start">
            <h1 className="text-3xl md:text-6xl font-bold text-pink-600 pl-8">
              Bienvenidos a Mi Tienda
            </h1>
            <h2 className="text-xl md:text-4xl text-black font-semibold pl-16 md:pl-32">Siguenos!</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero2 pt-32"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero3 pt-8 md:pt-32">
            <h1 className="text-2xl md:text-6xl font-black">
              Ideal para emprendedores
            </h1>
            <div className="mx-32 pt-8 font-bold text-lg">
              <p> Promociona tus productos y servicios!</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
