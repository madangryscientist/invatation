import React from "react";
import { render, screen } from "@testing-library/react";
import Invitation from "./invitation";

test("renders learn react link", () => {
  render(<Invitation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
