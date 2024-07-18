import { Flex } from "@chakra-ui/react";
import Chat from "./Chat";
import chatData from "../../database/defaultData";
import ButtonComponent from "./ButtonComponent";

export default function SidebarBody() {
  return (
    <Flex as="footer" direction="column" gap={6} mb={3}>
      {chatData.map((chat, index) => (
        <Chat key={index} icon="ChatIcon" text={chat} color="gray.900" />
      ))}
      <ButtonComponent buttonColor="gray.200" icon="AddIcon" text="New Chat" />
    </Flex>
  );
}
<Chat icon="SunIcon" text="Switch to Light Mode" color="gray.900" />;
