import { Flex } from "@chakra-ui/react";
import Chat from "./Chat";

export default function SidebarFooter() {
  return (
    <Flex as="footer" direction="column" mt={2}>
      <Chat
        icon="DeleteIcon"
        text="Clear All Conversations"
        color="stone.300"
        isChat={false}
      />
      <Chat
        isChat={false}
        icon="SunIcon"
        text="Switch to Light Mode"
        color="stone.300"
      />
      <Chat
        isChat={false}
        icon="StarIcon"
        text="Upgrade to Pro"
        color="stone.300"
      />
      <Chat
        isChat={false}
        icon="ExternalLinkIcon"
        text="Updates & FAQ"
        color="stone.300"
      />
      <Chat isChat={false} icon="UnlockIcon" text="Log Out" color="green.300" />
    </Flex>
  );
}
