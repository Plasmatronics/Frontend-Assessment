import { Button, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";
// import { colorLightener } from "../../utils/helpers";
import { colorDarkener } from "../../utils/helpers";
import { AllChakraColors } from "../../utils/types";

interface ButtonProps {
  icon: keyof typeof ChakraIcons;
  text: string;
  buttonColor?: AllChakraColors;
}

export default function ButtonComponent({
  icon,
  text,
  buttonColor = "gray.200",
}: ButtonProps) {
  const darkenedColor = colorDarkener(buttonColor);
  // const lightenedColor = colorLightener(buttonColor);
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
    <Button
      leftIcon={<IconComponent boxSize={3} color="black" />}
      borderRadius="base"
      boxShadow="md"
      background={buttonColor}
      mb={20}
      _hover={{ background: darkenedColor }}
      _active={{
        background: darkenedColor,
        transform: "translateY(2px)",
        boxShadow: "base",
      }}
      _focus={{ background: darkenedColor }}
    >
      <Text fontSize={13}>{text}</Text>
    </Button>
  );
}
//"AddIcon"
