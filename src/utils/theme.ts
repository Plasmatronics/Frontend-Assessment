import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/manrope";

const theme = extendTheme({
  fonts: {
    heading: `'manrope', sans-serif`,
    body: `'poppins', sans-serif`,
  },
});

export default theme;
