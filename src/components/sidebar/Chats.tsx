import { Box } from "@chakra-ui/react";
import Chat from "./Chat";

export default function Chats() {
  return (
    <Box>
      <Chat icon="ChatIcon" text="One for the home" color="gray.900" />
      <Chat icon="ChatIcon" text="One for the home" color="gray.900" />
      <Chat icon="ChatIcon" text="One for the home" color="gray.900" />
    </Box>
  );
}
