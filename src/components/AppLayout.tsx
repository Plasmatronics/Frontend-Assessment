import SidebarLayout from "../components/sidebar/SidebarLayout";
import MainLayout from "../components/main/MainLayout";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useCloseTaskbar } from "../hooks/useCloseTaskbar";
import { SHOW_SIDEBAR_WIDTH } from "../utils/config";

export default function AppLayout() {
  const { ref, tabOpen, handleToggleSidebar } = useCloseTaskbar();
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
        <SidebarLayout
          tabOpen={tabOpen}
          handleToggleSidebar={handleToggleSidebar}
          isLargerThan800={isLargerThan800}
        />
      </Box>
      <Box zIndex={10} flex={1}>
        <MainLayout tabOpen={tabOpen} />
      </Box>
    </Flex>
  );
}
