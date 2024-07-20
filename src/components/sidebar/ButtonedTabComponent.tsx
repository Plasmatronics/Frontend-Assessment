import { AcceptsTabState } from "../../utils/types";
import TabButton from "./TabButton";
import SidebarBaseComponent from "./SidebarBaseComponent";
import { Box } from "@chakra-ui/react";

export default function ButtonedTabComponent({
  tabOpen,
  handleToggleSidebar,
}: AcceptsTabState) {
  return (
    <Box position={"relative"}>
      <TabButton onClick={handleToggleSidebar} />
      {/* //if its open well present the component, otherwise not */}
      {tabOpen && <SidebarBaseComponent />}
    </Box>
  );
}
