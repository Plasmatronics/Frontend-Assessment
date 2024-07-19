import { Flex } from "@chakra-ui/react";
import SidebarTask from "./SidebarTask";
import { userData } from "../../database/defaultData";
import ButtonComponent from "./ButtonComponent";

export default function SidebarBody() {
  return (
    <Flex direction="column" sx={{ gap: "0.2rem" }} mb={7}>
      {userData.pastChats?.map((chat, index) => (
        <SidebarTask
          key={index}
          icon="ChatIcon"
          text={chat}
          color="stone.300"
        />
      ))}
      <ButtonComponent buttonColor="gray.100" icon="AddIcon" text="New Chat" />
    </Flex>
    // rendering a sidebar tast for ecah past chat, and then also the button component
  );
}
