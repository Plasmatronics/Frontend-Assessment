import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { useOutsideClick } from "@chakra-ui/react";

interface TaskbarContextProps {
  tabOpen: boolean;
  handleToggleSidebar: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

const CloseTaskbarContext = createContext<TaskbarContextProps | undefined>(
  undefined
);

function CloseTaskbarProvider({ children }: { children: ReactNode }) {
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

  return (
    <CloseTaskbarContext.Provider value={{ ref, tabOpen, handleToggleSidebar }}>
      {children}
    </CloseTaskbarContext.Provider>
  );
}

//quick custom hook to use these values easily throughout the project and get an error if used outsided provider
function useCloseTaskbar() {
  const context = useContext(CloseTaskbarContext);
  if (context === undefined)
    throw new Error(
      "useCloseTaskbar must be used within a CloseTaskbarProvider"
    );
  return context;
}

export { CloseTaskbarProvider, useCloseTaskbar };
