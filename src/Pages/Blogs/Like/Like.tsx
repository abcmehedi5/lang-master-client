import React, { useState } from "react";
import { BiLike } from "react-icons/bi";

const Like: React.FC = () => {
    const [like, setLike] = useState<number>(0);
    const [likeActive, setLikeActive] = useState<boolean>(false);

    const likeData = () => {
        setLike(like + 1);
        setLikeActive(true);
    };

    return (
        <div className="text-2xl">
            <button
                className={` flex items-center font-semibold text-xl ${likeActive ? 'text-yellow-600' : 'text-black'}`}
                onClick={likeData}
            >
               <span className="text-3xl gap-1 items-center flex"> <BiLike />{like}</span>
            </button>
        </div>
    );
};

export default Like;
