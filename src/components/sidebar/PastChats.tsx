import { userData } from "../../database/defaultData";
import SidebarButton from "./SidebarButton";

import { Box } from "@chakra-ui/react";

export default function PastChats() {
  return (
    <Box>
      {userData.pastChats?.map((chat, index) => (
        // fetching user's past chats
        <SidebarButton
          key={index}
          icon="ChatIcon"
          text={chat}
          color="stone.300"
        />
      ))}
    </Box>
  );
}
