import { useMediaQuery } from "@chakra-ui/react";

import { SHOW_SIDEBAR_WIDTH } from "../../utils/config";
import TabbedComponent from "./TabbedComponent";
import ButtonedTabComponent from "./ButtonedTabComponent";
import { AcceptsTabState } from "../../utils/types";

export default function Sidebar({ setTabOpen, tabOpen }: AcceptsTabState) {
  const [isLargerThan800] = useMediaQuery(`(min-width: ${SHOW_SIDEBAR_WIDTH})`);

  return isLargerThan800 ? (
    <TabbedComponent />
  ) : (
    <ButtonedTabComponent tabOpen={tabOpen} setTabOpen={setTabOpen} />
  );
}
