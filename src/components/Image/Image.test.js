import React from "react";
import { render } from "@testing-library/react";
import Image from "./Image";

describe("Image tests", () => {
  it("should render", () => {
    expect(render(<Image />)).toBeTruthy();
  });
});
