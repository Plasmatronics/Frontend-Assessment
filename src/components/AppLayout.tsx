import Sidebar from "./sidebar/Sidebar";
import MainLayout from "./main/MainLayout.tsx";
import { Flex } from "@chakra-ui/react";

export default function AppLayout() {
  return (
    <Flex>
      <Sidebar />
      <MainLayout />
    </Flex>
  );
}
