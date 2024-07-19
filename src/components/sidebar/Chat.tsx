import React from "react";
import { HStack, Link, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";
import { AllChakraColors } from "../../utils/types";

// Define the props interface
interface ChatProps {
  // creating a union type of all possible icon values
  icon: keyof typeof ChakraIcons;
  text: string;
  // we'll give a default color of gray.900, so well leave color as optional
  color?: AllChakraColors;
  isChat?: boolean;
}

export default function Chat({
  icon,
  text,
  color = "gray.900",
  isChat = true,
}: ChatProps) {
  // getting the property name of the passed icon to render, asserting it's a react component
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
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
          as="h3"
          letterSpacing="normal"
          fontWeight={"semibold"}
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
