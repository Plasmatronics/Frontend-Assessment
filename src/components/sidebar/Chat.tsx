import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";
import { AllChakraColors } from "../../utils/types";

// Define the props interface
interface ChatProps {
  // creating a union type of all possible icon values
  icon: keyof typeof ChakraIcons;
  text: string;
  // we'll give a default color of gray.900, so well leave color as optional
  color?: AllChakraColors;
}

export default function Chat({ icon, text, color = "gray.900" }: ChatProps) {
  // getting the property name of the passed icon to render, asserting it's a react component
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
    <HStack as="span" paddingRight={8}>
      <IconComponent boxSize={4} color={color} />
      <Text
        as="h3"
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
  );
}
