import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/manrope";

const theme = extendTheme({
  fonts: {
    heading: `'manrope', sans-serif`,
    body: `'poppins', sans-serif`,
  },
  colors: {
    gray: {
      50: "#F6F9FA",
      100: "#F0F1F1",
      200: "#E6E9E9",
      300: "#DDE0E0",
      400: "#CFD1D1",
      500: "#C0C3C3",
      600: "#adb0b0",
    },
    green: {
      50: "#8ce99a",
      100: "#74ff5b",
      200: "#33e612",
      300: "#51cf66",
      400: "#58bb3f",
      500: "#1C9A0A",
      600: "#138808",
    },
    stone: {
      100: "#74747c",
      200: "#464652",
      300: "#3a3a47",
    },
  },
  fontSizes: {
    xxs: "0.65rem",
    xs: "0.7rem",
    sm: "0.77rem",
    md: ".9rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 1000,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "62em",
    lg: "66em",
    xl: "80em",
    "2xl": "96em",
  },
});

export default theme;
