import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (value: string) => { 
    setInput(value);
  };

  return (
    <div>
      <div className="flex bg-white items-center w-full lg:w-1/2 mx-auto space-x-2 border border-gray-300 rounded-md text-center my-8">
        <div className="icon pl-3 flex items-center gap-0">
          <FaSearch className="text-gray-500 lg:text-xl font-small" />
        </div>
        <input
          type="text"
          className="input focus:outline-none"
          placeholder="Learn Today"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
