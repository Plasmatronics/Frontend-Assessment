import { Flex } from "@chakra-ui/react";
import Features from "./Features";
import MainHeading from "./MainHeading";
import Searchbar from "./Searchbar";

function MainLayout() {
  return (
    <Flex
      padding={40}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        gap: {
          base: "2rem",
          lg: "3.4rem",
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
