import SidebarLayout from "../components/sidebar/SidebarLayout";
import MainLayout from "../components/main/MainLayout";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function AppLayout() {
  const [tabOpen, setTabOpen] = useState(false);

  return (
    <Flex overflow="hidden" position="relative" height="100vh" width="100vw">
      <Box
        bg="white"
        zIndex={100}
        position={tabOpen ? "fixed" : "relative"}
        width={{
          base: tabOpen ? "200px" : "0px",
          sm: tabOpen ? "250px" : "0px",
          md: "275px",
        }}
      >
        <SidebarLayout tabOpen={tabOpen} setTabOpen={setTabOpen} />
      </Box>
      {tabOpen && (
        <Box
          zIndex={50}
          bg="rgba(0, 0, 0, 0.6)"
          position="absolute"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
        />
      )}
      <Box zIndex={10} flex={1}>
        <MainLayout />
      </Box>
    </Flex>
  );
}
