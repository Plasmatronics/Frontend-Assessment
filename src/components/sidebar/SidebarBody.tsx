import { Flex } from "@chakra-ui/react";

import ButtonComponent from "./ButtonComponent";
import PastChats from "./PastChats";

export default function SidebarBody() {
  return (
    <Flex direction="column" sx={{ gap: "0.2rem" }} mb={7}>
      <PastChats />
      <ButtonComponent buttonColor="stone.50" icon="AddIcon" text="New Chat" />
    </Flex>
    // rendering a sidebar tast for each past chat, and then also the button component
  );
}
