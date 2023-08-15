import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-auto gap-4 mx-4 px-5 bg-gray-100 items-center">
      <div className="text-left mx-auto py-9">
        <p className="text-teal-500 font-medium pb-4">Education system</p>
        <h1 className="text-5xl font-bold">Start Sharing</h1>
        <h2 className="text-5xl font-semibold text-yellow-500 font-abc py-4">
          knowledge
        </h2>
        <p className="tracking-normal my-4">
          Lang-Master is a user-friendly language learning project
          <br />
         It offers interactive lessons for improving language skills effectively.
          <br />
         The platform provides personalized learning paths and practical assessments.
          <br />
          With Lang-Master, mastering new languages becomes enjoyable and efficient.
        </p>
        <button className="btn  defaultBtn ">Get Started</button>
      </div>

      <div>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="w-full lg:h-96 md:h-auto"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          <Swiper navigation={true} modules={[Navigation]} className="w-full">
            {images.map((imagePath, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imagePath}
                  alt={`Slide ${index + 1}`}
                  className="lg:h-96 md:h-24 w-full rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Swiper>
      </div>
    </div>
  );
};

export default Cover;
