import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Triangle
        visible={true}
        height="90"
        width="90"
        color="#FC5A5A"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
