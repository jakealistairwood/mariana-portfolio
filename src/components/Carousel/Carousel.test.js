import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel tests", () => {
  it("should render", () => {
    expect(render(<Carousel />)).toBeTruthy();
  });
});
