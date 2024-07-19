import { CalendarIcon } from "@chakra-ui/icons";
import { Text, Flex, Center } from "@chakra-ui/react";
import { userData } from "../../database/defaultData";

export default function SidebarHeader() {
  return (
    <Center>
      <Flex sx={{ gap: "0.7rem" }} width="100%">
        {/* again using the esacoe hatch for gap */}
        <Center>
          <CalendarIcon boxShadow="lg" color="green.500" boxSize={8} />
        </Center>
        <Flex direction="column">
          <Text
            as="h3"
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
            fontWeight="medium"
            fontFamily="poppins"
            fontSize="xs"
            color="stone.100"
          >
            Free Account
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
}
