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
            //renders dark mode or light mode icon, or the current setting icon
            icon={
              isSunIcon && colorMode === "light" ? "MoonIcon" : setting.icon
            }
            //renders dark mode or light mode text, or the current setting text
            text={
              isSunIcon && colorMode === "dark"
                ? "Switch to Light Mode"
                : setting.text
            }
            color={setting.color}
            isChat={setting.isChat}
            onClick={isSunIcon ? toggleColorMode : undefined}
          />
        );
      })}
    </Flex>
  );
}
