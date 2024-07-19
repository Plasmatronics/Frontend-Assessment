import { AcceptsTabState } from "../../utils/types";
import TabButton from "./TabButton";
import TabbedComponent from "./TabbedComponent";
import { Box } from "@chakra-ui/react";

export default function ButtonedTabComponent({
  setTabOpen,
  tabOpen,
}: AcceptsTabState) {
  function handleTabButtonClick(): void {
    setTabOpen((prevTabOpen) => !prevTabOpen);
  }

  return (
    <Box position={"relative"}>
      <TabButton onClick={handleTabButtonClick} />
      {tabOpen && <TabbedComponent />}
    </Box>
  );
}
