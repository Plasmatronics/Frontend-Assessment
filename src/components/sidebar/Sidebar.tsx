import { Divider, Flex } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <Flex
      borderRight="1px solid gray"
      alignItems="center"
      width="23vw"
      direction="column"
      height="100vh"
      padding={4}
      gap={4}
    >
      <SidebarHeader />
      <Divider orientation="horizontal" />
      <SidebarBody />
      <Divider orientation="horizontal" />
      <SidebarFooter />
    </Flex>
  );
}
