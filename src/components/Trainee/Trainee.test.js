import React from "react";
import { render } from "@testing-library/react";
import Trainee from "./Trainee";

describe("Trainee tests", () => {
  it("should render", () => {
    expect(render(<Trainee />)).toBeTruthy();
  });
});
