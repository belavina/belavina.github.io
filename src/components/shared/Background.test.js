import React from "react";
import { mount } from "enzyme";
import Background from "./Background";

describe("<Background/>", () => {
  it("is hidden on small-res devices", () => {
    const background = mount(<Background />);
    const videoElement = background.find("video");

    window.innerWidth = 100;
    window.innerHeight = 200;
    window.dispatchEvent(new Event("resize"));

    expect(videoElement.hasClass("bg-video__content--hidden")).toBeTruthy();
    expect(videoElement.props().autoPlay).toBeFalsy();
  });
});
