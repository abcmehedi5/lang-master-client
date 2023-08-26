import React, { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

interface CommentInputProps {
  onComment: (newComment: Comment) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ onComment }: CommentInputProps) => {
  const [commentBody, setCommentBody] = useState('');

  const handleCommentSubmit = () => {
    if (commentBody.trim() !== '') {
      const newComment: Comment = {
        id: new Date().toISOString(),
        body: commentBody,
        comments: [],
      };
      onComment(newComment);
      setCommentBody('');
    }
  };

  return (
    <div>
      <input
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
        placeholder="Add a Comment"
        className="bg-slate-100 w-full outline-none"
      />
      <AiFillCaretRight
        className="text-2xl text-slate-700 mr-2"
        onClick={handleCommentSubmit}
      />
    </div>
  );
};

export default CommentInput;
