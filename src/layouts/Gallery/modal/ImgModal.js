import React from "react";

function ImgModal(img) {
  return (
    <div className="modal">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default ImgModal;
