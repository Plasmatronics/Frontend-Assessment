import React from "react";
import { HStack, Link, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";
import { AllChakraColors } from "../../utils/types";

interface ChatProps {
  icon: keyof typeof ChakraIcons;
  text: string;
  color?: AllChakraColors;
  isChat?: boolean;
}

export default function SidebarTask({
  icon,
  text,
  color = "gray.900",
  isChat = true,
}: ChatProps) {
  // getting the property name of the passed icon to render, asserting it's a react component
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
    //if its a chat element we will highlight gray, otherwise just make it clickable
    <Link
      paddingX={3}
      paddingY={2.5}
      borderRadius={isChat ? "md" : undefined}
      _hover={{
        background: isChat ? "gray.400" : undefined,
      }}
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
    </Link>
  );
}
