import { BsArrowUpCircleFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";
const ScrollTop = () => {
    return (
        <div className='bg-gray-700'>
      <ScrollToTop
        smooth
        component={<BsArrowUpCircleFill className='text-5xl text-[#359fac]'/>}
        style={{ background: 'transparent' }}
      >
      </ScrollToTop>
    </div>
    );
};

export default ScrollTop;