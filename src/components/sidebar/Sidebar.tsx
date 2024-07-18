import { Box } from "@chakra-ui/react";
import Chats from "./Chats";
import ButtonComponent from "./ButtonComponent";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <Box>
      <SidebarHeader />
      <Chats />
      <ButtonComponent icon="AddIcon" text="Add Chat" />
    </Box>
  );
}
