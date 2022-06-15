import React from "react";

const Loading = () => {
  return (
    // <div class="text-center">
    //   <div class="d-flex justify-content-center">
    //     <strong>Loading...</strong>
    //     <div
    //       class="spinner-border ms-auto"
    //       role="status"
    //       aria-hidden="true"
    //     ></div>
    //   </div>
    // </div>
    <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  );
};

export default Loading;
