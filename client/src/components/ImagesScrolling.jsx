import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imag_1 from "../assets/images/robo_1.png";
import imag_2 from "../assets/images/robo_2.jpg";
import imag_3 from "../assets/images/robo_3.jpg";
import imag_4 from "../assets/images/robo_4.png";


const images = [
    imag_1,
    imag_2,
    imag_3,
    imag_4,
];

export default function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="custom-prev">&#10094;</button>
      <button className="custom-next">&#10095;</button>
    </div>
  );
}
