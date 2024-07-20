import { useRef, useState } from "react";
import { useOutsideClick } from "@chakra-ui/react";

export function useCloseTaskbar() {
  const [tabOpen, setTabOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  function handleToggleSidebar(): void {
    setTabOpen((prevTabOpen) => !prevTabOpen);
  }

  useOutsideClick({
    ref: ref,
    handler: () => {
      if (tabOpen) {
        handleToggleSidebar();
      }
    },
  });

  return {
    ref,
    tabOpen,
    handleToggleSidebar,
  };
}
