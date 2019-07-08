import React from "react";
import { mount } from "enzyme";
import Contact from "./Contact";
import { act } from "react-dom/test-utils";

// draft for now, should be resolved with react 16.9.0
// https://github.com/testing-library/react-hooks-testing-library/issues/14

jest.mock("emailjs-com", () => ({
  send: jest.fn(() => Promise.resolve())
}));

describe("<About/>", () => {
  it("shows skill details when hovered over skill bar", () => {
    act(async () => {
      const contact = mount(<Contact />);

      contact.find("input").simulate("change", { target: { value: "Hello" } });
      contact
        .find("textarea")
        .simulate("change", { target: { value: "Hello" } });
      contact.find(".form").simulate("submit");
      expect(contact.find(".btn").hasClass("btn--success")).toBeTruthy();
    });

    // const progressBar = about.find(".progress-bar");
    // progressBar.simulate("mouseEnter");
    // expect(about.find(".skill-details .heading-tertiary").text()).toBe("bar");
    // expect(about.find(".skill-details .paragraph").text()).toBe("fizz");
  });
});
