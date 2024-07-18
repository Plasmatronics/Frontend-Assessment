import { CalendarIcon } from "@chakra-ui/icons";
import { Text, Flex, Center } from "@chakra-ui/react";

export default function SidebarHeader() {
  return (
    <Flex gap={3}>
      <Center>
        <CalendarIcon boxShadow="lg" color="green.400" boxSize={8} />
      </Center>
      <Flex direction="column">
        <Text
          letterSpacing="tight"
          fontWeight="semibold"
          fontFamily="poppins"
          fontSize="md"
          color="gray.900"
        >
          Create Account
        </Text>

        <Text
          letterSpacing="tight"
          fontWeight="thin"
          fontFamily="poppins"
          fontSize="xs"
          color="gray.400"
        >
          Free Account
        </Text>
      </Flex>
    </Flex>
  );
}
