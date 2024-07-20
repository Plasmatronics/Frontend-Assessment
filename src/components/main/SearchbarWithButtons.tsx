import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

import { colorDarkener } from "../../utils/helpers";
import BasicSearchbar from "./BasicSearchbar";

// goal-->display basicSearchbar with button components
function SearchbarWithButtons() {
  const darkenedGreen500 = colorDarkener("green.500");

  return (
    <InputGroup
      borderRadius="md"
      width={{ base: "85%", xs: "80%", xl: "75%" }}
      sx={{ boxShadow: "0px 3px 4px 1px rgba(0, 0, 0, 0.25)" }}
    >
      <InputLeftElement>
        {/* //considered abstarcting icon buttons, but not enough benefit in reusability and readability */}
        <IconButton
          color="white"
          bgColor="green.500"
          fontSize={15}
          size="xs"
          icon={<AddIcon />}
          aria-label="Add File"
          isRound={true}
          _hover={{ background: darkenedGreen500 }}
          _active={{
            background: darkenedGreen500,
            transform: "translateY(0.5px)",
            boxShadow: "base",
          }}
          _focus={{ background: darkenedGreen500 }}
        />
      </InputLeftElement>
      <BasicSearchbar />
      <InputRightElement>
        <IconButton
          color="green.500"
          bgColor="white"
          fontSize={15}
          size="xs"
          icon={<ArrowRightIcon />}
          aria-label="Search"
          _hover={{ background: "white" }}
          _active={{
            background: "white",
            transform: "translateY(0.5px)",
            boxShadow: "base",
          }}
          _focus={{ background: "white" }}
        />
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchbarWithButtons;
