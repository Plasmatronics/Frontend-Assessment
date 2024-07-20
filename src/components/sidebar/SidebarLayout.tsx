import SidebarBase from "./SidebarBase";
import ButtonedSidebar from "./ButtonedSidebar";

interface AcceptsTabState {
  tabOpen: boolean;
  handleToggleSidebar: () => void;
  isLargerThan800: boolean;
}
// one goal--> render sideBar Component base or tabbed componnent with button
export default function SidebarLayout({
  tabOpen,
  handleToggleSidebar,
  isLargerThan800,
}: AcceptsTabState) {
  return isLargerThan800 ? (
    <SidebarBase />
  ) : (
    <ButtonedSidebar
      handleToggleSidebar={handleToggleSidebar}
      tabOpen={tabOpen}
    />
  );
}
//rendering the sidebarbase component if were not in mobile view, and it witht the button if we are//
//prop drilling is only going a level or two so its fine, context would be too much work for too little payoff//
