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
export default function SearchbarWithButtons() {
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
          color="green.200"
          bgColor="transparent"
          size="lg"
          icon={<ArrowRightIcon />}
          aria-label="Search"
          _hover={{ background: "transparent" }}
          _active={{
            background: "transparent",
            transform: "translateY(0.5px)",
            boxShadow: "base",
          }}
          _focus={{ background: "transparent" }}
        />
      </InputRightElement>
    </InputGroup>
  );
}
