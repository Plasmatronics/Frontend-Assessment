import SidebarBase from "./SidebarBase";
import ToggleSidebarButton from "./ToggleSidebarButton";

import { Box } from "@chakra-ui/react";

interface AcceptsTabState {
  tabOpen: boolean;
  handleToggleSidebar: () => void;
}

export default function ButtonedSidebar({
  tabOpen,
  handleToggleSidebar,
}: AcceptsTabState) {
  return (
    <Box position="relative">
      <ToggleSidebarButton onClick={handleToggleSidebar} />
      {/* //if its open we'll present the baseSidebar, otherwise not */}
      {tabOpen && <SidebarBase />}
    </Box>
  );
}
