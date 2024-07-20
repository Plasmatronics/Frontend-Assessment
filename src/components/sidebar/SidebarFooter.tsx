import { Flex, useColorMode } from "@chakra-ui/react";
import SidebarTask from "./SidebarTask";
import { settingsData } from "../../database/defaultData";

export default function SidebarFooter() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" mt={2}>
      {/* rendering a sidebartask for each setting with ths specified variations */}
      {settingsData.map((setting, index) => {
        const isSunIcon = setting.icon === "SunIcon";
        return (
          <SidebarTask
            key={index}
            icon={setting.icon}
            text={setting.text}
            color={setting.color}
            isChat={setting.isChat}
            onClick={isSunIcon ? toggleColorMode : undefined}
          />
        );
      })}
    </Flex>
  );
}
