import React from "react";
import { ThemeProvider } from "styled-components";
import Globals from './globals';

const theme = {
  colors: {
    main: "#FFFDF9",
    text: "#06B49A"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <>
    <Globals />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;