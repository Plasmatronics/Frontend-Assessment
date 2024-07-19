import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Circle,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

function Searchbar() {
  return (
    <InputGroup
      borderRadius="md"
      width="75%"
      sx={{ boxShadow: "0px 3px 4px 1px rgba(0, 0, 0, 0.25)" }}
    >
      <InputLeftElement>
        <Circle bg="green.500" padding={1}>
          <AddIcon color="white" />
        </Circle>
      </InputLeftElement>
      <Input
        borderRadius="inherit"
        placeholder='"Example": Generate a detailed fence estimation outline.'
        textAlign="center"
        letterSpacing="normal"
        fontWeight={600}
        fontFamily="poppins"
        fontSize="sm"
        color="gray.800"
        _placeholder={{
          color: "gray.700",
        }}
      />
      <InputRightElement>
        <ArrowRightIcon color="green.500" />
      </InputRightElement>
    </InputGroup>
  );
}

export default Searchbar;
