import React, { useState } from 'react';
import { BiComment, BiLike} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments';
import Share from './Share/Share';



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

const BlogMainContain: React.FC<BlogMainContainProps> = ({ items }) => {
    const [showCommentInput, setShowCommentInput] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sharedData] = useState<string | null>(null);

    // Track the likes and whether the user has liked each item
    const [likes, setLikes] = useState<number[]>(items.map(() => 0));
    const [liked, setLiked] = useState<boolean[]>(items.map(() => false));

    const handleLikeClick = (index: number) => {
        const newLikes = [...likes];
        const newLiked = [...liked];

        if (!liked[index]) {
            newLikes[index]++;
        } else {
            newLikes[index]--;
        }

        // Toggle the liked state
        newLiked[index] = !liked[index];

        setLikes(newLikes);
        setLiked(newLiked);
    };


   

    return (
        <>
            {items.map((item, index) => (
                <div key={item._id} className="p-4 rounded-lg border my-4">
                    <div className="card glass">
                        <figure>
                            <img src={item.image} alt="car!" />
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
                        <button
                            onClick={() => handleLikeClick(index)}
                            className={`flex items-center ${liked[index] ? 'text-yellow-600' : 'text-black'}`}
                        >
                            <BiLike /> Like ({likes[index]})
                        </button>
                        {/* Comment */}
                        <button
                            onClick={() => setShowCommentInput(!showCommentInput)}
                            className="flex items-center"
                        >
                            <BiComment /> Comment
                        </button>

                        {/* Share */}
                        <button  className="flex items-center">
                            <Share/> Share
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
