import SidebarBaseComponent from "./SidebarBaseComponent";
import ButtonedTabComponent from "./ButtonedTabComponent";
import { AcceptsTabState } from "../../utils/types";

export default function SidebarLayout({
  tabOpen,
  handleToggleSidebar,
  isLargerThan800,
}: AcceptsTabState) {
  return isLargerThan800 ? (
    <SidebarBaseComponent />
  ) : (
    <ButtonedTabComponent
      handleToggleSidebar={handleToggleSidebar}
      tabOpen={tabOpen}
    />
  );
}
//rendering the sidebarbase component if were not in mobile view, and it witht the button if we are//
//prop drilling is only going a level or two so its fine, context would be too much work for too little payoff//
