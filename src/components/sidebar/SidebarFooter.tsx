import { Flex, useColorMode } from "@chakra-ui/react";

import SidebarButton from "./SidebarButton";
import { settingsData } from "../../database/defaultData";

export default function SidebarFooter() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" mt={2}>
      {/* rendering a sidebar button for each setting with ths specified variations */}
      {settingsData.map((setting, index) => {
        const isSunIcon = setting.icon === "SunIcon";
        return (
          <SidebarButton
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
