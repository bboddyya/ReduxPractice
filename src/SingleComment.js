import { useState, useEffect } from "react";
import { commentRemove, commentUpdate } from "./redux/actions";
import { useDispatch } from "react-redux";

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (text) setCommentText(text);
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(commentRemove(id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="comments-item-delete" onClick={handleRemove}>
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
