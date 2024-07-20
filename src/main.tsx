import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme.ts";
import { CloseTaskbarProvider } from "../src/contexts/CloseTaskbarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CloseTaskbarProvider>
        <App />
      </CloseTaskbarProvider>
    </ChakraProvider>
  </React.StrictMode>
);
