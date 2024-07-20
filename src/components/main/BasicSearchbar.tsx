import { Input, useMediaQuery } from "@chakra-ui/react";

export default function BasicSearchbar() {
  const [isNotPhone] = useMediaQuery(`(min-width: 31.25em)`);
  // 31.25 em =500px

  return (
    <Input
      borderRadius="inherit"
      placeholder={
        isNotPhone
          ? "Generate a detailed fence estimation outline."
          : "Are Fences Expensive?"
      }
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
