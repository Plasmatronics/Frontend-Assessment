import { Flex } from "@chakra-ui/react";
import Chat from "./Chat";
import { userData } from "../../database/defaultData";
import ButtonComponent from "./ButtonComponent";

export default function SidebarBody() {
  return (
    <Flex as="footer" direction="column" gap={2} mb={7}>
      {userData.pastChats.map((chat, index) => (
        <Chat key={index} icon="ChatIcon" text={chat} color="gray.900" />
      ))}
      <ButtonComponent buttonColor="gray.100" icon="AddIcon" text="New Chat" />
    </Flex>
  );
}
