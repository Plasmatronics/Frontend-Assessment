import { Divider, Flex, Text } from "@chakra-ui/react";

function MainHeading() {
  return (
    <Flex alignItems="center">
      <Text fontWeight="bold" fontSize="4xl" color="gray.800">
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
      <Text fontWeight="black" fontSize="5xl" color="gray.900">
        FenceGPT
      </Text>
    </Flex>
  );
}

export default MainHeading;
