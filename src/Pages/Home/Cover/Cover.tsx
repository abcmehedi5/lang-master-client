import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Cover.css";
import shap1 from '../../../../public/shape-1.svg'
import shap2 from '../../../../public/shape-2.svg'
import shap3 from '../../../../public/shape-3.svg'
// import { BsFillSearchHeartFill } from "react-icons/bs";
import useLeaderBoard from "../../../hooks/useLeaderBoardData/useLeaderBoard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

// import one from "../../../assets/img/one.jpg";
// import two from "../../../assets/img/two.jpg";
// import three from "../../../assets/img/three.jpg";
// import four from "../../../assets/img/four.jpg";
// import five from "../../../assets/img/five.jpg";
// import six from "../../../assets/img/six.jpg";
// import seven from "../../../assets/img/seven.jpg";
// import eight from "../../../assets/img/eight.jpg";
// import nine from "../../../assets/img/nine.jpg";
// // import required modules
// import { Autoplay, Navigation } from "swiper/modules";

interface CoverProps {
  // Define any props you might pass to the component
}

const Cover: React.FC<CoverProps> = () => {
  // const images = [one, two, three, four, five, six, seven, eight, nine];
  const {allLeaderBoardData} = useLeaderBoard()
  return (



//     <div className="banner grid grid-cols-1 lg:grid-cols-2 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-4 items-center pb-0 sm:pb-20">
//       <div className="text-left mx-auto py-9">
//         <p className="text-teal-500 font-medium pb-4">Education system</p>
//         <h1 className="text-5xl font-bold">Start Sharing</h1>
//         <h2 className="text-5xl font-semibold text-yellow-500 font-abc py-4">
//           knowledge
//         </h2>
//         <p className="tracking-normal my-4">
//         "Welcome to Lang-Master, your interactive language learning platform! Immerse yourself in a world of languages as you embark on a fun and engaging journey to fluency. With personalized lessons, real-time feedback, and a vibrant community, Lang-Master makes mastering languages a breeze. Start your linguistic adventure today!"
//         </p>
//         <button className="btn defaultBtn ">Join For Free</button>
//       </div>

//       <div>
//   <Swiper
//     navigation={true}
//     modules={[Navigation, Autoplay]}
//     className="w-full"
//     autoplay={{ delay: 2000, disableOnInteraction: false }}
//     slidesPerView={1} // Show one slide at a time on small devices
//     spaceBetween={10} // Add some space between slides
//   >
//     {images.map((imagePath, index) => (
//       <SwiperSlide key={index}>
//         <img
//           src={imagePath}
//           alt={`Slide ${index + 1}`}
//           className="w-full rounded-xl"
//           style={{ height: 'auto', maxHeight: '1000px' }} // Adjust the maximum height as needed
//         />
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>

//     </div>
<div className="banner md:flex items-center justify-between bg-gradient-to-r from-[#95d3a2] to-[#359fac] relative md:py-0 pt-0 pb-16 md:h-[100vh] px-7 gap-20">
  <div className="absolute animatespin h-20 w-20 opacity-95 hidden md:block animatespin right-10 bottom-32"><img src={shap1} /></div>
  <div className='animate-updown hidden md:block absolute top-14  left-[45%] h-20 w-20 opacity-80'><img src={shap2} /></div>
  <div className='animate-updown hidden md:block absolute top-32  left-[10%] h-20 w-20 opacity-80'><img src={shap3} /></div>
  

 <div className="imgbanner relative md:h-[500px] h-[350px] rounded-full ml-[50px] md:w-1/2 ">
    <img className="w-full h-full" src="https://i.ibb.co/s1vDwGW/banner-img-1.png" alt="" />
  
 </div>
  <div className="md:w-1/2 text-center">
    <h1 className="text-4xl md:text-6xl font-semibold text-white">Improve your English</h1>
    <p className="text-xl md:text-2xl my-4 text-gray-200">We have <span className="text-[#eebb2e]">40k+</span> Online courses & <span className="text-[#eebb2e]">500K+</span> Online registered student. Learn your favorite language in a fun way.</p>

<div className="flex my-2 justify-center">
  {allLeaderBoardData.slice(0,3).map( user => <img className="w-10 h-10 rounded-full border-2" src={user?.image}/>)} <p className="flex items-center gap-2 text-white md:ml-3">People already trusted us <Link to='/user-dashboard/leader-board'><span className="flex items-center text-[#eebb2e] underline cursor-pointer gap-1">view People<AiOutlineArrowRight /></span></Link></p>
</div>
<div className="text-center"> <button className="button-52 mt-4" role="button">get Started</button></div>
    
  </div>
</div>
  );
};

export default Cover;
