import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

import SidebarLayout from "../components/sidebar/SidebarLayout";
import MainLayout from "../components/main/MainLayout";
import { useCloseTaskbar } from "../contexts/CloseTaskbarContext";
import { SHOW_SIDEBAR_WIDTH } from "../utils/config";

export default function AppLayout() {
  const { tabOpen, ref } = useCloseTaskbar();
  const [isLargerThan800] = useMediaQuery(`(min-width: ${SHOW_SIDEBAR_WIDTH})`);

  return (
    <Flex overflowX="hidden" position="relative" height="100vh" width="100vw">
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
        {/* // prop drilling just a level or two is fine here */}
        <SidebarLayout isLargerThan800={isLargerThan800} />
      </Box>
      <Box zIndex={10} flex={1}>
        <MainLayout />
      </Box>
    </Flex>
  );
}
