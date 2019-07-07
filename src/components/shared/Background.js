import React from "react";

const Background = () => {
  const autoPlay = document.body.clientWidth > 870;
  const modifierCls = autoPlay ? "" : "bg-video__content--hidden";

  return (
    <div className="bg-video">
      <video
        className={`bg-video__content ${modifierCls}`}
        autoPlay={autoPlay}
        muted
      >
        <source src={"/videos/particles_720.mp4"} type="video/mp4" />
        Your browser is not supported!
      </video>
      {autoPlay && <div className="bg-video__overlay" />}
    </div>
  );
};

export default Background;
