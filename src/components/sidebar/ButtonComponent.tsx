import { Button, Center, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";
// import { colorLightener } from "../../utils/helpers";
import { colorDarkener } from "../../utils/helpers";
import { AllChakraColors } from "../../utils/types";

interface ButtonProps {
  icon: keyof typeof ChakraIcons;
  text: string;
  buttonColor?: AllChakraColors;
}

//restricting this API to icon, text, and buttonColor

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
        leftIcon={
          <IconComponent boxSize={{ sm: 1.5, md: 2, lg: 3 }} color="black" />
        }
        borderRadius="md"
        boxShadow="md"
        width={{ sm: 150, md: 175, lg: 200 }}
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
        <Text fontSize={{ sm: "xxs", md: "xs", lg: "sm" }}>{text}</Text>
      </Button>
    </Center>
  );
}
