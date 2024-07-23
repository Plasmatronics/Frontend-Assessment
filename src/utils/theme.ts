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
        bg: mode("white", "gray.700")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
      },
      "::selection": {
        //trigger green300 if light mode and green500 if dark
        backgroundColor: mode("green.300", "green.500")(props),
      },
      ":root": {
        //white
        "--chakra-colors-white": mode("#fff", "gray.800")(props),
        // Gray color scale
        "--chakra-colors-gray-50": mode("#F6F9FA", "#2D2D2D")(props),
        "--chakra-colors-gray-100": mode("#F0F1F1", "#3A3A3A")(props),
        "--chakra-colors-gray-200": mode("#E6E9E9", "#484848")(props),
        "--chakra-colors-gray-300": mode("#DDE0E0", "#565656")(props),
        "--chakra-colors-gray-400": mode("#CFD1D1", "#646464")(props),
        "--chakra-colors-gray-500": mode("#C0C3C3", "#727272")(props),
        "--chakra-colors-gray-900": mode("#171923", "#EDF2F7")(props),
        // Green color scale
        "--chakra-colors-green-300": mode("#51cf66", "#3D8B47")(props),
        "--chakra-colors-green-400": mode("#58bb3f", "#347A3A")(props),
        "--chakra-colors-green-500": mode("#1C9A0A", "#2B6930")(props),
        "--chakra-colors-green-600": mode("#138808", "#225727")(props),
      },
    }),
  },
  fonts: {
    heading: `'manrope', sans-serif`,
    body: `'poppins', sans-serif`,
  },
  colors: {
    green: {
      300: "#51cf66",
      400: "#58bb3f",
      500: "#1C9A0A",
      600: "#138808",
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
  semanticTokens: {
    colors: {
      stone: {
        _light: {
          100: "#74747c",
          200: "#464652",
          300: "#3a3a47",
        },
        _dark: {
          100: "#8A8A93",
          200: "#5E5E6A",
          300: "#4C4C57",
        },
      },
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
