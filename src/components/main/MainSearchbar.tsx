import { Input } from "@chakra-ui/react";

export default function MainSearchbar() {
  return (
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
  );
}
