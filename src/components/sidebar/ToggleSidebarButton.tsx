import { DragHandleIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface TabButtonPropType {
  onClick: () => void;
}

export default function ToggleSidebarButton({ onClick }: TabButtonPropType) {
  return (
    <IconButton
      position={"absolute"}
      aria-label="Tab Button"
      color="stone.100"
      _active={{ color: "stone.300" }}
      icon={<DragHandleIcon boxSize={4} />}
      onClick={onClick}
      variant="unstyled"
    />
  );
}
