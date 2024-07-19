import { Divider, Flex, Text } from "@chakra-ui/react";

function MainHeading() {
  return (
    <Flex alignItems="center">
      <Text as="h2" fontWeight="bold" fontSize="4xl" color="stone.200">
        Welcome to
      </Text>
      <Divider
        orientation="vertical"
        color="green.500"
        borderColor="green.500"
        borderWidth="1px"
        height="70%"
        borderRadius="md"
        ml={3}
        mr={2}
      />
      <Text as="h1" fontWeight="black" fontSize="5xl" color="stone.300">
        FenceGPT
      </Text>
    </Flex>
  );
}

export default MainHeading;
