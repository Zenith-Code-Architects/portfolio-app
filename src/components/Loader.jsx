import { InfinitySpin } from "react-loader-spinner";

const Loader = ({ color = "#4fa94d", width = "200" }) => {
  return (
    <InfinitySpin
      visible={true}
      width={width}
      color={color}
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
