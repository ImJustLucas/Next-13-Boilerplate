/**
 * @jest-environment jsdom
 */
import Home from "@pages/index";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /just a boilerplate for next/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
