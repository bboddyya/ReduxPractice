import { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { commentCreate, commentsLoad } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => {
    const { commentReducer } = state;
    return commentReducer.comments;
  });

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, [dispatch]);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comment-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Comments;
