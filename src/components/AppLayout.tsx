import SidebarLayout from "../components/sidebar/SidebarLayout";
import MainLayout from "../components/main/MainLayout";
import { SHOW_SIDEBAR_WIDTH } from "../utils/config";

import { Box, Flex, useMediaQuery, useOutsideClick } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function AppLayout() {
  const [tabOpen, setTabOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isLargerThan800] = useMediaQuery(`(min-width: ${SHOW_SIDEBAR_WIDTH})`);

  function handleToggleSidebar(): void {
    if (!isLargerThan800) {
      console.log("opened!");
      setTabOpen((prevTabOpen) => !prevTabOpen);
    }
  }

  useOutsideClick({
    ref: ref,
    //outside click will only take effect on "ref"ed element if the tab is open, otherwise nothing will take effect//
    handler: () => {
      tabOpen && handleToggleSidebar();
    },
  });

  return (
    <Flex overflow="hidden" position="relative" height="100vh" width="100vw">
      <Box
        ref={ref}
        bg="white"
        zIndex={100}
        position={tabOpen ? "fixed" : "relative"}
        width={{
          base: tabOpen ? "200px" : "0px",
          sm: tabOpen ? "250px" : "0px",
          md: "275px",
        }}
      >
        <SidebarLayout
          handleToggleSidebar={handleToggleSidebar}
          tabOpen={tabOpen}
          isLargerThan800={isLargerThan800}
        />
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
