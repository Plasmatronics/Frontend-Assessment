import { Flex } from "@chakra-ui/react";
import Features from "./Features";
import MainHeading from "./MainHeading";
import Searchbar from "./Searchbar";

function MainLayout() {
  return (
    <Flex
      paddingY={40}
      paddingX={{ sm: 0, md: 10 }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        gap: {
          base: "2rem",
          xl: "3.4rem",
        },
      }}
    >
      <MainHeading />
      <Searchbar />
      <Features />
    </Flex>
  );
}

export default MainLayout;
