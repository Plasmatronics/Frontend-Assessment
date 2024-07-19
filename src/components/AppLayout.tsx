import Sidebar from "../components/sidebar/Sidebar";
import MainLayout from "../components/main/MainLayout";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function AppLayout() {
  const [tabOpen, setTabOpen] = useState(false);

  return (
    <Flex position="relative" width="100vw">
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
        <Sidebar tabOpen={tabOpen} setTabOpen={setTabOpen} />
      </Box>
      {tabOpen && (
        <Box
          zIndex={50}
          bg="rgba(0, 0, 0, 0.6)"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        />
      )}
      <Box overflowX="hidden" zIndex={10} flex={1}>
        <MainLayout />
      </Box>
    </Flex>
  );
}
