import { Flex } from "@chakra-ui/react";
import SidebarTask from "./SidebarTask";

export default function SidebarFooter() {
  return (
    <Flex direction="column" mt={2}>
      <SidebarTask
        icon="DeleteIcon"
        text="Clear All Conversations"
        color="stone.300"
        isChat={false}
      />
      <SidebarTask
        isChat={false}
        icon="SunIcon"
        text="Switch to Light Mode"
        color="stone.300"
      />
      <SidebarTask
        isChat={false}
        icon="StarIcon"
        text="Upgrade to Pro"
        color="stone.300"
      />
      <SidebarTask
        isChat={false}
        icon="ExternalLinkIcon"
        text="Updates & FAQ"
        color="stone.300"
      />
      <SidebarTask
        isChat={false}
        icon="UnlockIcon"
        text="Log Out"
        color="green.300"
      />
    </Flex>
  );
}
