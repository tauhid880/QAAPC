import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[500px] ">
      <span className="w-20 h-20 rounded-full border-8 border-dashed border-secondary animate-spin"></span>
    </div>
  );
};

export default Loading;
