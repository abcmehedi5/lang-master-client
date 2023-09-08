import { FaSearch } from "react-icons/fa";


const SearchBlog = ({handleSearch}:any) => {

    return (
        <>
        <div className="py-2 md:px-4 cursor-pointer flex items-center justify-between px-5 w-1/2 mx-auto md:w-[25%]" style={{borderBottom:'2px solid #999'}}>
        <input  onChange={handleSearch} type="text" className="border-none outline-none" placeholder='search by title or authorname' title="search by title or author name" />
        <p><FaSearch /></p>
      </div>
        </>
    );
};

export default SearchBlog;