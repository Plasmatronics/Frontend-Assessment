import { useRef, useState } from "react";
import { useOutsideClick } from "@chakra-ui/react";

export function useCloseTaskbar() {
  const [tabOpen, setTabOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  function handleToggleSidebar(): void {
    //callback to avoid stale state
    setTabOpen((prevTabOpen) => !prevTabOpen);
  }

  //if we click OUTSIDE whatever we attach this ref to we call the handler
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
