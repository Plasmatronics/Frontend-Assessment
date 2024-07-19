import { Divider, Flex } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

export default function SidebarBaseComponent() {
  return (
    <Flex
      as="aside"
      borderRight="1px"
      borderColor="gray.500"
      alignItems="center"
      direction="column"
      padding={4}
      height="100vh"
      // gap hard to to toggle with chakra so i used the escape hatch
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
