import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

it("should work", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox", {
    name: "task",
  });
  fireEvent.input(input, { target: { value: "Hello" } });
  const input1 = await screen.findByRole("textbox", {
    name: "deadline",
  });
  fireEvent.input(input1, { target: { value: "2" } });
});
