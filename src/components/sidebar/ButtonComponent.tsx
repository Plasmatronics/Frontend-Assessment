import { Button, Center, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";

import { colorDarkener } from "../../utils/helpers";
import { AllChakraColors } from "../../utils/types";

interface ButtonProps {
  icon: keyof typeof ChakraIcons;
  text: string;
  buttonColor?: AllChakraColors;
}

//restricting this API to icon, text, and buttonColor
//one goal--> clicking and expanadble button component
export default function ButtonComponent({
  icon,
  text,
  buttonColor = "gray.200",
}: ButtonProps) {
  //function darkens by one shade
  const darkenedColor = colorDarkener(buttonColor);

  //getting the icon property from all chakraIcons, so we can render passed in icon, asserting it as a react element
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
    <Center>
      <Button
        leftIcon={<IconComponent boxSize={3} color="black" />}
        borderRadius="md"
        boxShadow="md"
        color="black"
        width={{ base: "150px", sm: "200px" }}
        background={buttonColor}
        mb={12}
        mt={2}
        _hover={{ background: darkenedColor }}
        _active={{
          background: darkenedColor,
          transform: "translateY(2px)",
          boxShadow: "base",
        }}
        _focus={{ background: darkenedColor }}
      >
        <Text fontSize="sm">{text}</Text>
      </Button>
    </Center>
  );
}
