import { RotatingLines } from "react-loader-spinner";

import { Spinner } from "components/Loader/Loader.styled";

export const Loader = () => (
  <Spinner>
    Loading...
    <RotatingLines
      strokeColor="#373684"
      strokeWidth="5"
      animationDuration="0.75"
      width="36"
      visible={true}
    />
  </Spinner>
);
