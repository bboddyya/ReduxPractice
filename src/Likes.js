import { connect } from "react-redux";
import { incrementLike, decrementLike } from "./redux/actions";

function Likes(props) {
  return (
    <div className="button-controls">
      <button onClick={props.increment}>❤{props.likes}</button>
      <button onClick={props.decrement}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(incrementLike()),
    decrement: () => dispatch(decrementLike()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
