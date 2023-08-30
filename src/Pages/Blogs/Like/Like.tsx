import React, { useState } from "react";
import { BiLike } from "react-icons/bi";

const Like: React.FC = ({postId}) => {
    console.log('like',postId)
    const [like, setLike] = useState<number>(0);
    const [likeActive, setLikeActive] = useState<boolean>(false);

    const likeData = () => {
        setLike(like + 1);
        setLikeActive(true);
    };


    // routes/like.js
// const express = require('express');
// const router = express.Router();
// const ObjectID = require('mongodb').ObjectID;

// const Post = require('../models/post'); // Your MongoDB model

// router.post('/:postId/like', async (req, res) => {
//     try {
//         const postId = req.params.postId;
//         const post = await Post.findOneAndUpdate(
//             { _id: ObjectID(postId) },
//             { $inc: { like: 1 } },
//             { new: true }
//         );
//         return res.json(post);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'An error occurred' });
//     }
// });

// module.exports = router;



    // const likeData = async () => {
    //     try {
    //         const response = await axios.post(`/api/posts/${postId}/like`);
    //         const updatedPost = response.data;
    //         setLike(updatedPost.like);
    //         setLikeActive(true);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

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
