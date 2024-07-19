import { Divider, Flex } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <Flex
      as="aside"
      borderRight="1px"
      borderColor="gray.500"
      alignItems="center"
      width="20vw"
      direction="column"
      height="100vh"
      padding={4}
      sx={{ gap: "1.2rem" }}
    >
      <SidebarHeader />
      <Divider color="gray.200" orientation="horizontal" />

      {/* Placing these in a flex so icons are alligned on the left side */}
      <Flex direction="column">
        <SidebarBody />
        <Divider color="gray.200" orientation="horizontal" />
        <SidebarFooter />
      </Flex>
    </Flex>
  );
}
