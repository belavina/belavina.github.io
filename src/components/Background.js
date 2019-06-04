import React from "react";

const Background = () => {
  let autoPlay = true;
  if (document.body.clientWidth < 870) {
    autoPlay = false;
  }

  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay={autoPlay} muted loop>
        <source src={"/videos/particles_720.mp4"} type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default Background;
