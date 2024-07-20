import { useCloseTaskbar } from "../../contexts/CloseTaskbarContext";
import SidebarBase from "./SidebarBase";
import ToggleSidebarButton from "./ToggleSidebarButton";

import { Box } from "@chakra-ui/react";

export default function ButtonedSidebar() {
  const { tabOpen, handleToggleSidebar } = useCloseTaskbar();
  return (
    <Box position="relative">
      <ToggleSidebarButton onClick={handleToggleSidebar} />
      {/* //if its open we'll present the baseSidebar, otherwise not */}
      {tabOpen && <SidebarBase />}
    </Box>
  );
}
