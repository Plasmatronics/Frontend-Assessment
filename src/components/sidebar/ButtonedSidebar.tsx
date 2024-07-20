import { AcceptsTabState } from "../../utils/types";
import TabButton from "./TabButton";
import SidebarBase from "./SidebarBase";

import { Box } from "@chakra-ui/react";

export default function ButtonedSidebar({
  tabOpen,
  handleToggleSidebar,
}: AcceptsTabState) {
  return (
    <Box position="relative">
      <TabButton onClick={handleToggleSidebar} />
      {/* //if its open well present the baseSidebar, otherwise not */}
      {tabOpen && <SidebarBase />}
    </Box>
  );
}
