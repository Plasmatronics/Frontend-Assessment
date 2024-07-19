import { Divider, Flex } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <Flex
      borderRight="1px"
      borderColor="gray.500"
      alignItems="center"
      width="20vw"
      direction="column"
      height="100vh"
      padding={4}
      gap={4}
      overflow={"hidden"}
    >
      <SidebarHeader />
      <Divider color="gray.200" orientation="horizontal" />
      <Flex direction="column">
        <SidebarBody />
        <Divider color="gray.200" orientation="horizontal" />
        <SidebarFooter />
      </Flex>
    </Flex>
  );
}
