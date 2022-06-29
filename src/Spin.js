import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spin = (props) => {
  const spinner = useSelector((state) => state.loaderReducer.loading);

  return (
    <div className="loader-styles">
      <Loader
        type="TailSpin"
        color="#d60b0b"
        height={80}
        width={80}
        visible={spinner}
      />
    </div>
  );
};

export default Spin;
