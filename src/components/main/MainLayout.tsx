import { Flex } from "@chakra-ui/react";
import Features from "./Features";
import MainHeading from "./MainHeading";
import Searchbar from "./Searchbar";

function MainLayout() {
  return (
    <Flex
      width="80vw"
      paddingX={20}
      paddingY={40}
      direction="column"
      alignItems="center"
      sx={{ gap: "55px" }}
    >
      <MainHeading />
      <Searchbar />
      <Features />
    </Flex>
  );
}

export default MainLayout;
