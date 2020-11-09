import React from "react";
import { render } from "@testing-library/react";
import Bio from "./Bio.test";

describe("Bio tests", () => {
  it("should render", () => {
    expect(render(<Bio />)).toBeTruthy();
  });
});
