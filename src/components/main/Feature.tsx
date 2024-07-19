import { Flex, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";

interface FeatureProps {
  icon: keyof typeof ChakraIcons;
  heading: string;
  text: string;
}

//limiting the api to heading, the actual text, and the icon
function Feature({ icon, heading, text }: FeatureProps) {
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
    <Flex
      sx={{ gap: ".2rem" }}
      width={170}
      flexWrap="wrap"
      alignItems="center"
      direction="column"
    >
      <IconComponent color="stone.300" boxSize={3} />
      <Text
        as="h3"
        letterSpacing="tight"
        fontWeight="semibold"
        fontFamily="poppins"
        fontSize="lg"
        color="stone.300"
      >
        {heading}
      </Text>
      <Text
        letterSpacing="tight"
        fontWeight="medium"
        fontFamily="poppins"
        fontSize="xs"
        color="stone.200"
        align="center"
      >
        {text}
      </Text>
    </Flex>
  );
}

export default Feature;