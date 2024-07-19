import { CalendarIcon } from "@chakra-ui/icons";
import { Text, Flex, Center } from "@chakra-ui/react";
import { userData } from "../../database/defaultData";

export default function SidebarHeader() {
  return (
    <Center mr={12}>
      <Flex gap={3} width="100%">
        <Center>
          <CalendarIcon boxShadow="lg" color="green.500" boxSize={8} />
        </Center>
        <Flex direction="column">
          <Text
            letterSpacing="tight"
            fontWeight="semibold"
            fontFamily="poppins"
            fontSize="lg"
            color="gray.900"
          >
            Hello, {userData.firstName}
          </Text>
          <Text
            letterSpacing="tight"
            fontWeight="thin"
            fontFamily="poppins"
            fontSize="xs"
            color="gray.500"
          >
            Free Account
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
}
