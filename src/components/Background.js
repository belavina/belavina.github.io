import React from "react";

const Background = () => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={"/videos/particles_720.mp4"} type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default Background;
