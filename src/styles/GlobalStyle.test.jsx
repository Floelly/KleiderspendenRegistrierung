import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme as theme } from "./Theme";
import GlobalStyle from "./GlobalStyle";
import "@testing-library/jest-dom";

import TestComponent from "ui/rare/TestComponent";

describe("Theme + GlobalStyle", () => {
  it("renders react TestComponent with theme styles", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TestComponent />
      </ThemeProvider>,
    );

    const box = screen.getByTestId("test-box");
    expect(box).toHaveTextContent("Themed Box");
    expect(box).toHaveStyle(`background-color: ${theme.colors.primary}`);
    expect(box).toHaveStyle(`color: ${theme.colors.light}`);
  });
});
