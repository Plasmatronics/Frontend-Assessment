import { Divider, Flex, Text } from "@chakra-ui/react";

function MainHeading() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Text
        as="h2"
        fontWeight="bold"
        fontSize={{ base: "xl", xs: "2xl", sm: "3xl", xl: "4xl" }}
        color="stone.200"
        flexShrink={0}
      >
        Welcome to
      </Text>
      <Divider
        orientation="vertical"
        color="green.500"
        borderColor="green.500"
        borderWidth="1px"
        height={70}
        borderRadius="md"
        ml={3}
        mr={2}
      />
      <Text
        as="h1"
        fontWeight="black"
        fontSize={{ base: "2xl", xs: "3xl", sm: "4xl", xl: "5xl" }}
        color="stone.300"
      >
        FenceGPT
      </Text>
    </Flex>
  );
}

export default MainHeading;
