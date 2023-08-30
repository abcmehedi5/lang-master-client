import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Cover.css";

import one from "../../../assets/img/one.jpg";
import two from "../../../assets/img/two.jpg";
import three from "../../../assets/img/three.jpg";
import four from "../../../assets/img/four.jpg";
import five from "../../../assets/img/five.jpg";
import six from "../../../assets/img/six.jpg";
import seven from "../../../assets/img/seven.jpg";
import eight from "../../../assets/img/eight.jpg";
import nine from "../../../assets/img/nine.jpg";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

interface CoverProps {
  // Define any props you might pass to the component
}

const Cover: React.FC<CoverProps> = () => {
  const images = [one, two, three, four, five, six, seven, eight, nine];
  return (
    <div className="banner grid grid-cols-1 lg:grid-cols-2 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-4 items-center pb-0 sm:pb-20">
      <div className="text-left mx-auto py-9">
        <p className="text-teal-500 font-medium pb-4">Education system</p>
        <h1 className="text-5xl font-bold">Start Sharing</h1>
        <h2 className="text-5xl font-semibold text-yellow-500 font-abc py-4">
          knowledge
        </h2>
        <p className="tracking-normal my-4">
        "Welcome to Lang-Master, your interactive language learning platform! Immerse yourself in a world of languages as you embark on a fun and engaging journey to fluency. With personalized lessons, real-time feedback, and a vibrant community, Lang-Master makes mastering languages a breeze. Start your linguistic adventure today!"
        </p>
        <button className="btn defaultBtn ">Join For Free</button>
      </div>

      <div>
  <Swiper
    navigation={true}
    modules={[Navigation, Autoplay]}
    className="w-full"
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    slidesPerView={1} // Show one slide at a time on small devices
    spaceBetween={10} // Add some space between slides
  >
    {images.map((imagePath, index) => (
      <SwiperSlide key={index}>
        <img
          src={imagePath}
          alt={`Slide ${index + 1}`}
          className="w-full rounded-xl"
          style={{ height: 'auto', maxHeight: '1000px' }} // Adjust the maximum height as needed
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default Cover;
