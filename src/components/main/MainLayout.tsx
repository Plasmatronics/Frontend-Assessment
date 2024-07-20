import { Box, Flex } from "@chakra-ui/react";

import Features from "./Features";
import MainHeading from "./MainHeading";
import SearchbarWithButtons from "./SearchbarWithButtons";

//One job---> To lay main section out
function MainLayout({ tabOpen }: { tabOpen: boolean }) {
  return (
    <Flex
      paddingY={40}
      paddingX={{ sm: 0, md: 10 }}
      direction="column"
      position="relative"
      justifyContent="center"
      alignItems="center"
      sx={{
        gap: {
          base: "2rem",
          xl: "3.4rem",
        },
      }}
    >
      {tabOpen && (
        <Box
          zIndex={50}
          bg="rgba(0, 0, 0, 0.6)"
          position="absolute"
          top={0}
          left={0}
          width="100vw"
          height="200vh"
        />
      )}
      <MainHeading />
      <SearchbarWithButtons />
      <Features />
    </Flex>
  );
}

export default MainLayout;
