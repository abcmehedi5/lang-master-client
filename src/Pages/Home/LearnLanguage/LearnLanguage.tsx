
import { BiBriefcase } from "react-icons/bi";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { RiBuilding4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import img1 from "../../../assets/learning/a.jpg";
import img2 from "../../../assets/learning/b.jpg";
import img3 from "../../../assets/learning/c.jpg";
import img4 from "../../../assets/learning/d.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { GiMeepleGroup } from "react-icons/gi";


function LearnLanguage() {
    const learning: string[] = [img1, img2, img3, img4];

    return (
        <div className="my-4 shadow-lg">
            {/* Group button */}
            <div className="flex border bg-slate-100 mx-auto justify-center md:w-1/2 w-full rounded-3xl text-center my-6 ">
                <Link to="/" className="hover:bg-[#047e65] hover:text-white items-center p-4 w-full rounded-3xl flex gap-2">
                    <FaBook />Learn & Get Certificates
                </Link>
                <Link to="/about" className="hover:bg-[#047e65] hover:text-white p-4 rounded-3xl w-full flex gap-2 items-center">
                    <BiBriefcase /> Build Your Career
                </Link>
                <Link to="/contact" className="hover:bg-[#047e65] hover:text-white p-4 rounded-3xl w-full flex gap-2 items-center ">
                    <RiBuilding4Line /> Earn On Alison
                </Link>
            </div>
            <h2 className="lg:text-5xl text-xl font-bold text-center">Learn a new Language</h2>

            {/* search bar */}
            <SearchBar />

            {/* Learning section */}
            <div className="grid grid-cols-4 lg:gap-4 ">
                {learning.map((learn, index) => (
                    <div className=" mt-4 rounded-xl ">
                        <img key={index} src={learn} alt="" className="cover lg:w-60 lg:h-48" />
                    </div>
                ))}
            </div>

            {/* Learning Footer & use Icons */}
            <div className="w-full bg-[#0A4D68] py-4 flex text-white items-center lg:gap-5 p-2 lg:text-xl justify-center">
                <div className="flex">
                    <h3>Read Excellent on</h3>
                    <AiFillStar className="text-[#00FFCA] m-2" />
                    <h3>Truslpilat</h3>
                    <AiFillStar className="bg-[#00FFCA] m-2" />
                    <AiFillStar className="bg-[#00FFCA] m-2 " />
                    <AiFillStar className="bg-[#00FFCA] m-2" />
                    <AiFillStar className="bg-[#00FFCA] m-2" />
                </div>
                <hr className=" bg-white w-1 h-14" />
                <div className="flex">
                    <BsPeople className="m-2" />
                    <h3>30 Million + Learners</h3>
                </div>
                <hr className=" bg-white w-1 h-14" />
                <div className="flex">
                    <FaGraduationCap className="m-2" />
                    <h3>6 Million + Graduates</h3>
                </div>
                <hr className=" bg-white w-1 h-14" />
                <div className="flex">
                    <GiMeepleGroup className="m-2" />
                    <h3>195 Countries</h3>
                </div>
            </div>
        </div>
    );
}

export default LearnLanguage;
