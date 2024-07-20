import SidebarBase from "./SidebarBase";
import ButtonedSidebar from "./ButtonedSidebar";

//one goal--> render sideBar Component base or tabbed componnent with button
export default function SidebarLayout({
  isLargerThan800,
}: {
  isLargerThan800: boolean;
}) {
  return isLargerThan800 ? <SidebarBase /> : <ButtonedSidebar />;
}
//rendering the sidebarbase component if were not in mobile view, and it witht the button if we are//
