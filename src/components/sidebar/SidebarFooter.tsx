import { Flex } from "@chakra-ui/react";
import Chat from "./Chat";

export default function SidebarFooter() {
  return (
    <Flex as="footer" direction="column" paddingRight={8} gap={5}>
      <Chat icon="DeleteIcon" text="Clear All Conversations" color="gray.900" />
      <Chat icon="SunIcon" text="Switch to Light Mode" color="gray.900" />
      <Chat icon="StarIcon" text="Upgrade to Pro" color="gray.900" />
      <Chat icon="ExternalLinkIcon" text="Updates & FAQ" color="gray.900" />
      <Chat icon="UnlockIcon" text="Log Out" color="green.400" />
    </Flex>
  );
}
