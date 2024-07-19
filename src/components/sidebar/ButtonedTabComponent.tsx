import { AcceptsTabState } from "../../utils/types";
import TabButton from "./TabButton";
import SidebarBaseComponent from "./SidebarBaseComponent";
import { Box } from "@chakra-ui/react";

export default function ButtonedTabComponent({
  setTabOpen,
  tabOpen,
}: AcceptsTabState) {
  //toggling upon button push
  function handleTabButtonClick(): void {
    setTabOpen((prevTabOpen) => !prevTabOpen);
  }

  return (
    <Box position={"relative"}>
      <TabButton onClick={handleTabButtonClick} />
      {/* //if its open well present the component, otherwise not */}
      {tabOpen && <SidebarBaseComponent />}
    </Box>
  );
}
