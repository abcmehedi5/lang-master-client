import React, { useState } from 'react';
import { BiComment} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments';
import Share from './Share/Share';
import Like from './Like/Like';
import useBlogData from '../../hooks/useBlogData';



interface BlogMainContainProps {
    items: {
        _id: number;
        name: string;
        image: string;
        title: string;
        description: string;
        category: string;
    }[];
}

const BlogMainContain: React.FC<BlogMainContainProps> = () => {
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [sharedData] = useState<string | null>(null); 


    const { blog } = useBlogData()
    console.log(blog)

    return (
        <>
            {blog.map((item) => (
                <div key={item._id} className="p-4 rounded-lg border my-4">
                    <div className="card glass">
                        <figure>
                            <img className='w-full object-cover' src={item.image} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/singleBlogCard/${item._id}`}>
                                    <button className="btn bg-indigo-600 text-white">Read More!</button>
                                </Link>
                            </div>
                        </div>
                 </div>
                    <div className="card-actions justify-between m-4 font-semibold">
                        {/* Like  */}
                        <Like/>
                        {/* Comment */}
                        <button
                            onClick={() => setShowCommentInput(!showCommentInput)}
                            className="flex items-center"
                        >
                            <BiComment /> Comment
                        </button>

                        {/* Share */}
                        <button  className="flex items-center">
                            <Share/>Share
                        </button>
                    </div>
                    {showCommentInput && (
                        <Comments/>
                    )}
                    {sharedData && (
                        <div>
                            <p>Shared: {sharedData}</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default BlogMainContain;
