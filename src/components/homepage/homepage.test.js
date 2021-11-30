import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Homepage from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("Homepage", () => {
  it("should render the word homepage in an h1", () => {
    const wrapper = shallow(<Homepage>This is my first test</Homepage>);
    const homepage = wrapper.find("h1");
    expect(homepage).toHaveLength(1);
    expect(homepage.text()).toEqual("Homepage");
  });
});
