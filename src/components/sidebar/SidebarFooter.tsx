import { Flex } from "@chakra-ui/react";
import Chat from "./Chat";

export default function SidebarFooter() {
  return (
    <Flex as="footer" direction="column" mt={2}>
      <Chat
        icon="DeleteIcon"
        text="Clear All Conversations"
        color="gray.900"
        isChat={false}
      />
      <Chat
        isChat={false}
        icon="SunIcon"
        text="Switch to Light Mode"
        color="gray.900"
      />
      <Chat
        isChat={false}
        icon="StarIcon"
        text="Upgrade to Pro"
        color="gray.900"
      />
      <Chat
        isChat={false}
        icon="ExternalLinkIcon"
        text="Updates & FAQ"
        color="gray.900"
      />
      <Chat isChat={false} icon="UnlockIcon" text="Log Out" color="green.200" />
    </Flex>
  );
}
