import React, { useState } from 'react';

interface Comment {
  id: string;
  body: string;
  comments: Comment[];
}

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }: CommentItemProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replies, setReplies] = useState<Comment[]>(comment.comments);
  const [replyBody, setReplyBody] = useState('');

  const handleReplySubmit = () => {
    if (replyBody.trim() !== '') {
      const newReply: Comment = {
        id: new Date().toISOString(),
        body: replyBody,
        comments: [],
      };
      setReplies((prevReplies) => [newReply, ...prevReplies]);
      setReplyBody('');
    }
  };

  return (
    <div className="border-[1px] border-zinc-500 rounded-md mx-4">
      <span> {comment.body}</span>
      {isReplying ? (
        <>
          <button
            className="border-[1px] border-zinc-400 ms-4 w-20 bg-red-500 text-white"
            onClick={() => setIsReplying(false)}
          >
            Cancel
          </button>
          <button
            className="border-[1px] border-zinc-400 w-20 bg-green-500 text-white"
            onClick={handleReplySubmit}
          >
            Submit
          </button>
          <input
            value={replyBody}
            onChange={(event) => setReplyBody(event.target.value)}
            placeholder="Write a reply"
            className=" p-1 mt-2 mx-4"
          />
        </>
      ) : (
        <button
          className="border-[1px] border-zinc-400 w-20 mx-4 bg-blue-600 text-white"
          onClick={() => setIsReplying(true)}
        >
          Reply
        </button>
      )}
      {replies.map((reply) => (
        <CommentItem key={reply.id} comment={reply} />
      ))}
    </div>
  );
};

export default CommentItem;
