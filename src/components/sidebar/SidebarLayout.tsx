import { useMediaQuery } from "@chakra-ui/react";

import { SHOW_SIDEBAR_WIDTH } from "../../utils/config";
import SidebarBaseComponent from "./SidebarBaseComponent";
import ButtonedTabComponent from "./ButtonedTabComponent";
import { AcceptsTabState } from "../../utils/types";

export default function SidebarLayout({
  setTabOpen,
  tabOpen,
}: AcceptsTabState) {
  const [isLargerThan800] = useMediaQuery(`(min-width: ${SHOW_SIDEBAR_WIDTH})`);

  return isLargerThan800 ? (
    <SidebarBaseComponent />
  ) : (
    <ButtonedTabComponent tabOpen={tabOpen} setTabOpen={setTabOpen} />
  );
}
//rendering the sidebarbase component if were not in mobile view, and it witht the button if we are//
//prop drilling is only going a level or two so its fine, context would be too much work for too little payoff//
