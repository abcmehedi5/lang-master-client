
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogRightSidebarProps {
    items: {
        _id: number;
        name: string;
        image: string;
        title: string;
        description: string;
    }[];
}

const BlogRightSidebar: React.FC<BlogRightSidebarProps> = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div className="card lg:w-96 bg-base-100 shadow-xl my-3" key={item._id}>
                    <figure>
                        <img src={item.image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                            <div className="badge badge-secondary">{item.name}</div>
                        </h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                                <Link to={`/singleBlogCard/${item._id}`}>
                                    <button className="btn btn-primary">Read More!</button>
                                </Link>
                            </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogRightSidebar;
