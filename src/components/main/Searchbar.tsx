import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Link,
  Circle,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { colorDarkener } from "../../utils/helpers";

function Searchbar() {
  return (
    <InputGroup
      borderRadius="md"
      width={{ sm: "md", xl: "75%" }}
      sx={{ boxShadow: "0px 3px 4px 1px rgba(0, 0, 0, 0.25)" }}
    >
      <Link>
        <InputLeftElement>
          <Circle
            bg="green.500"
            padding={1}
            _hover={{ background: colorDarkener("green.500") }}
            _active={{
              background: colorDarkener("green.500"),
              transform: "translateY(0.5px)",
              boxShadow: "base",
            }}
            _focus={{ background: colorDarkener("green.500") }}
          >
            <AddIcon color="white" />
          </Circle>
        </InputLeftElement>
      </Link>
      <Input
        borderRadius="inherit"
        placeholder='"Example": Generate a detailed fence estimation outline.'
        textAlign="center"
        letterSpacing="normal"
        fontWeight={600}
        fontFamily="poppins"
        fontSize="sm"
        color="stone.300"
        _placeholder={{
          color: "stone.100",
        }}
      />
      <Link>
        <InputRightElement>
          <ArrowRightIcon
            color="green.500"
            _hover={{ color: colorDarkener("green.500") }}
            _active={{
              color: colorDarkener("green.500"),
              transform: "translateY(0.5px)",
              boxShadow: "base",
            }}
            _focus={{ color: colorDarkener("green.500") }}
          />
        </InputRightElement>
      </Link>
    </InputGroup>
  );
}

export default Searchbar;
