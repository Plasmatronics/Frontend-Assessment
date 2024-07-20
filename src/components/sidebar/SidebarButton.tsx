import React from "react";
import { HStack, Button, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";

import { AllChakraColors } from "../../utils/types";
import { buttonResetStyles } from "../../utils/theme";

interface ChatProps {
  icon: keyof typeof ChakraIcons;
  text: string;
  color?: AllChakraColors;
  isChat?: boolean;
  onClick?: () => void;
}

export default function SidebarButton({
  icon,
  text,
  color = "gray.900",
  isChat = true,
  onClick,
}: ChatProps) {
  // getting the property name of the passed icon to render, asserting it's a react component
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
    //if its a chat element we will highlight gray, otherwise just make it clickable
    <Button
      sx={{
        ...buttonResetStyles,
        paddingLeft: 2,
        paddingRight: 4,
        paddingY: 2.5,
        borderRadius: isChat ? "md" : undefined,
      }}
      _hover={{
        background: isChat ? "gray.400" : undefined,
      }}
      _active={{
        background: isChat ? "gray.400" : undefined,
      }}
      _focus={{
        borderRadius: "md",
      }}
      onClick={onClick}
    >
      <HStack as="span">
        <IconComponent boxSize={4} color={color} />
        <Text
          as="h4"
          letterSpacing="normal"
          fontWeight="semibold"
          fontFamily="poppins"
          fontSize="sm"
          color={color}
          noOfLines={1}
        >
          {text}
        </Text>
      </HStack>
    </Button>
  );
}
