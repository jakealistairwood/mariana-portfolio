import React from "react";
import { render } from "@testing-library/react";
import TraineeList from "./TraineeList";

describe("TraineeList tests", () => {
  it("should render", () => {
    expect(render(<TraineeList />)).toBeTruthy();
  });
});
