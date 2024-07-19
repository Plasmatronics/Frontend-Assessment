import { Flex } from "@chakra-ui/react";
import SidebarTask from "./SidebarTask";
import { settingsData } from "../../database/defaultData";

export default function SidebarFooter() {
  return (
    <Flex direction="column" mt={2}>
      {settingsData.map((setting, index) => (
        <SidebarTask
          key={index}
          icon={setting.icon}
          text={setting.text}
          color={setting.color}
          isChat={setting.isChat}
        />
      ))}
    </Flex>
  );
}
