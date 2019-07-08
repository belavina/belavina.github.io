import React from "react";
import { mount } from "enzyme";
import Experience from "./Experience";

jest.mock("../data/experience", () => [
  {
    title: "Scrum Magician",
    company: "Foo",
    startDate: "2016-09-01",
    endDate: "2017-04-29",
    description: "Scrum Magician description",
    keyItems: ["A", "B", "C"],
    technologies: ["Ajs", "Bjs", "Cjs"]
  },
  {
    title: "Star Trooper",
    company: "XYZ",
    startDate: "2017-04-29",
    description: "Star Trooper description",
    keyItems: ["D", "E", "F"],
    technologies: ["Djs", "Ejs", "Fjs"]
  }
]);

describe("<Experience/>", () => {
  it("selects the last breakpoint item by default", () => {
    const experience = mount(<Experience />);
    const breakpoints = experience.find(".timeline__breakpoint");
    expect(breakpoints).toHaveLength(2);

    expect(
      breakpoints.at(0).hasClass("timeline__breakpoint--selected")
    ).toBeFalsy();

    expect(
      breakpoints.at(1).hasClass("timeline__breakpoint--selected")
    ).toBeTruthy();
  });

  it("switches between breakpoints when one is selected", () => {
    const experience = mount(<Experience />);
    const breakpoints = experience.find(".timeline__breakpoint");
    expect(breakpoints).toHaveLength(2);

    breakpoints.at(0).simulate("click");

    expect(
      breakpoints.at(0).hasClass("timeline__breakpoint--selected")
    ).toBeTruthy();

    expect(
      breakpoints.at(1).hasClass("timeline__breakpoint--selected")
    ).toBeFalsy();
  });
});
