import { Input, useMediaQuery } from "@chakra-ui/react";

export default function BasicSearchbar() {
  const [isBiggerThanLandscapeTablet] = useMediaQuery(`(max-width: 63em)`);
  // 50 em =800px

  return (
    <Input
      borderRadius="inherit"
      placeholder={
        isBiggerThanLandscapeTablet
          ? "Are fences expensive?"
          : "Generate a detailed fence estimation outline."
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
