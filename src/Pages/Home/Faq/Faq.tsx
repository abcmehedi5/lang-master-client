import { Link } from 'react-router-dom';
import faq from '../../../assets/img/two.jpg'
const Faq = () => {
    return (
        <div className='md:flex items-center justify-center my-20 w-[90%] mx-auto'>
           <div className='md:w-1/2 p-4'>
            <h1 className='text-5xl font-bold'>Frequently asked question</h1>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore, unde in ex qui quam saepe? Cum voluptatem ab temporibus, eum dolorem earum eveniet dolor deserunt corporis illo eius facilis.</p>
            <Link to='/faq-section'>
            <button className="defaultBtn">Learn More</button>
            </Link>
           </div>
           <div className='md:w-1/2'>
            <img  className='w-full h-full' src={faq} alt="faq-img" />
           </div>
        </div>
    );
};

export default Faq;