import { extendTheme, SystemStyleObject, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/manrope";
import { SHOW_SIDEBAR_WIDTH } from "./config";
import { mode } from "@chakra-ui/theme-tools";

const themeConfiguration: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  themeConfiguration,
  styles: {
    global: (props: SystemStyleObject) => ({
      //how this dark mode is implemented is explained in the README.md
      body: {
        bg: mode("white", "gray.800")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
      },
      "::selection": {
        backgroundColor: mode("green.300", "green.500")(props),
      },
    }),
  },
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
    },
    green: {
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
  },
  breakpoints: {
    base: "0em", // 0px
    xs: "27em", // 0px
    sm: "30em", // 480px
    md: SHOW_SIDEBAR_WIDTH, // 880px
    lg: "66em", // 1056px
    xl: "72em", // 1150px
    "2xl": "96em", // 1536px
  },
});

export const buttonResetStyles: SystemStyleObject = {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "start",
  border: "none",
  cursor: "pointer",
  userSelect: "none",
  outline: "none",
  padding: 0,
  margin: 0,
  boxShadow: "none",
};

export default theme;
