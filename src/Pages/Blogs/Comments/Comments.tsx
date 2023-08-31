import  { useState } from 'react';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

interface Comment {
  id: string;
  body: string;
  comments: Comment[];
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentSubmit = (newComment: any) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <>
      <div className='w-full bg-slate-100 border rounded-lg py-3'>
        <CommentInput onComment={handleCommentSubmit} />
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default Comments;
