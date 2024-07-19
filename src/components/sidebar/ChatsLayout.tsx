import SidebarTask from "./SidebarTask";
import { userData } from "../../database/defaultData";
import { Box } from "@chakra-ui/react";

export default function ChatsLayout() {
  return (
    <Box>
      {userData.pastChats?.map((chat, index) => (
        <SidebarTask
          key={index}
          icon="ChatIcon"
          text={chat}
          color="stone.300"
        />
      ))}
    </Box>
  );
}
