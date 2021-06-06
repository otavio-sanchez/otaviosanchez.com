// test/pages/index.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<HomePage />);

    const heading = screen.getByText(
      /Otávio/i
    );
    expect(heading).toBeTruthy();
  });
});