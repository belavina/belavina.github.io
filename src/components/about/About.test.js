import React from "react";
import { mount } from "enzyme";
import About from "./About";

jest.mock("../data/skills", () => ({
  foo: [
    {
      name: "bar",
      percentage: 50,
      description: "fizz"
    }
  ]
}));

describe("<About/>", () => {
  it("shows skill details when hovered over skill bar", () => {
    const about = mount(<About />);
    const progressBar = about.find(".progress-bar");
    progressBar.simulate("mouseEnter");
    expect(about.find(".skill-details .heading-tertiary").text()).toBe("bar");
    expect(about.find(".skill-details .paragraph").text()).toBe("fizz");
  });
});
