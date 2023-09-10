// // import { BsArrowUpCircleFill } from "react-icons/bs";
// import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from 'react';
// import ArrowSvg from '../../public/arrow2.svg';
import './ScrollTop.css'
import { RxDoubleArrowUp } from 'react-icons/rx';


const ScrollTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    const scrollTop = () =>{
        window.scrollTo({top: 0, left: 0 , behavior: "smooth"});
    }

    const listenToScroll = ()=>{
      let heightTOHidden = 250;
      const winScroll = 
      document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > heightTOHidden) {
        setIsVisible(true)
      }else{
        setIsVisible(false)
      }
    }

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll)
      return ()=> window.removeEventListener("scroll", listenToScroll)
    },[])

  return (
   
<>
{isVisible && <div className='flex items-center justify-center'>
    <button className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollTop}> <p><RxDoubleArrowUp className="text-5xl animate-bounce" /></p> </button>
    </div>}
</>
   
    
  );
};

export default ScrollTop;
