import { Flex, Text } from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";

interface FeatureProps {
  icon: keyof typeof ChakraIcons;
  heading: string;
  text: string;
}

function Feature({ icon, heading, text }: FeatureProps) {
  const IconComponent = ChakraIcons[icon] as React.ElementType;

  return (
    <Flex
      sx={{ gap: "4px" }}
      width={170}
      flexWrap="wrap"
      alignItems="center"
      direction="column"
    >
      <IconComponent boxSize={3} />
      <Text
        letterSpacing="tight"
        fontWeight="semibold"
        fontFamily="poppins"
        fontSize="lg"
        color="gray.900"
      >
        {heading}
      </Text>
      <Text
        letterSpacing="tight"
        fontWeight="thin"
        fontFamily="poppins"
        fontSize="xs"
        color="gray.700"
        align="center"
      >
        {text}
      </Text>
    </Flex>
  );
}

export default Feature;
