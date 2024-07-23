import { extendTheme, SystemStyleObject, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/manrope";
import { mode } from "@chakra-ui/theme-tools";

import { SHOW_SIDEBAR_WIDTH } from "./config";

const themeConfiguration: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  themeConfiguration,
  styles: {
    global: (props: SystemStyleObject) => ({
      body: {
        //trigger white if light mode and gray if dark
        bg: mode("white", "var(--chakra-colors-dark-gradient)")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
      },
      "::selection": {
        //trigger green300 if light mode and green500 if dark
        backgroundColor: mode("green.300", "green.500")(props),
      },
      ":root": {
        //white
        "--chakra-colors-white": mode("#fff", "#EDF2F7")(props),
        //black
        "--chakra-colors-black": mode("#000000", "#b7b7b9")(props),
        //gradient
        "--chakra-colors-dark-gradient":
          "linear-gradient(180deg, #07071a 40%, #101110)",
        // Gray color scale
        "--chakra-colors-gray-50": mode("#F6F9FA", "#2D2D2D")(props),
        "--chakra-colors-gray-100": mode("#F0F1F1", "#F0F1F1")(props),
        "--chakra-colors-gray-150": mode("#F0F1F1", "#727272")(props),
        "--chakra-colors-gray-200": mode("#E6E9E9", "#484848")(props),
        "--chakra-colors-gray-300": mode("#DDE0E0", "#565656")(props),
        "--chakra-colors-gray-400": mode("#CFD1D1", "#646464")(props),
        "--chakra-colors-gray-500": mode("#C0C3C3", "#727272")(props),
        "--chakra-colors-gray-900": mode("#171923", "#EDF2F7")(props),
        // Green color scale
        "--chakra-colors-green-200": mode("#1C9A0A", "#28ce3e")(props),
        "--chakra-colors-green-300": mode("#51cf66", "#2cb43e")(props),
        "--chakra-colors-green-400": mode("#58bb3f", "#2ab636")(props),
        "--chakra-colors-green-500": mode("#1C9A0A", "#27812e")(props),
        "--chakra-colors-green-600": mode("#138808", "#1db62d")(props),
      },
    }),
  },
  fonts: {
    heading: `'manrope', sans-serif`,
    body: `'poppins', sans-serif`,
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
  semanticTokens: {
    colors: {
      "stone.50": { _light: "#ffffff", _dark: "#535753" },
      "stone.100": { _light: "#74747c", _dark: "#aaaaaa" },
      "stone.200": { _light: "#464652", _dark: "#b8b8b8" },
      "stone.300": { _light: "#3a3a47", _dark: "#b7b7b9" },
      sidebar: { _light: "#f2f3f5", _dark: "#101110" },
    },
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
