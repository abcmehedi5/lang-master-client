import React, { ReactNode } from 'react';
import { FaAirbnb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface BlogLeftSidebarProps {
    items: {
        title: ReactNode;
        _id: number;
        name: string;
    }[];
}

const BlogLeftSidebar: React.FC<BlogLeftSidebarProps> = ({items}) => {
    return (
        <div className='text-center mt-4 font-semibold mx-3 my-4'>
            {items.map((item) => (
                <Link to={`/singleBlogCard/${item._id}`} key={item._id} className='hover:text-cyan-600 flex items-center  leading-relaxed'>
                  <FaAirbnb/>{item.title}
                </Link>
            ))}
        </div>
    );
};

export default BlogLeftSidebar;
