import { Divider, Flex } from "@chakra-ui/react";

import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

export default function SidebarBase() {
  return (
    <Flex
      as="aside"
      borderRight="1px"
      borderColor="gray.200"
      alignItems="center"
      bgColor="sidebar"
      direction="column"
      borderRadius="xl"
      transform="translateX(-12px)"
      padding={4}
      height="100vh"
      // gap hard to to toggle with chakra so i used the escape hatch
      sx={{ gap: "1.6rem" }}
    >
      <SidebarHeader />
      <Divider
        borderColor="gray.300"
        borderWidth="1px"
        orientation="horizontal"
      />

      {/* Placing these in a flex so icons are alligned on the left side */}
      <Flex direction="column">
        <SidebarBody />
        <Divider
          borderColor="gray.300"
          borderWidth="1px"
          orientation="horizontal"
        />
        <SidebarFooter />
      </Flex>
    </Flex>
  );
}
