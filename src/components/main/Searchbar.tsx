import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Link,
  Circle,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { colorDarkener } from "../../utils/helpers";
import MainSearchbar from "./MainSearchbar";

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
            bg="green.400"
            padding={1}
            _hover={{ background: colorDarkener("green.400") }}
            _active={{
              background: colorDarkener("green.400"),
              transform: "translateY(0.5px)",
              boxShadow: "base",
            }}
            _focus={{ background: colorDarkener("green.400") }}
          >
            <AddIcon color="white" />
          </Circle>
        </InputLeftElement>
      </Link>
      <MainSearchbar />
      <Link>
        <InputRightElement>
          <ArrowRightIcon
            color="green.400"
            _hover={{ color: colorDarkener("green.400") }}
            _active={{
              color: colorDarkener("green.400"),
              transform: "translateY(0.5px)",
              boxShadow: "base",
            }}
            _focus={{ color: colorDarkener("green.400") }}
          />
        </InputRightElement>
      </Link>
    </InputGroup>
  );
}

export default Searchbar;
