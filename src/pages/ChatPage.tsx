import Sidebar from "../components/sidebar/Sidebar";
import MainLayout from "../components/main/MainLayout";
import { Flex } from "@chakra-ui/react";

//rendering the sidebar and main layout here
export default function AppLayout() {
  return (
    <Flex>
      <Sidebar />
      <MainLayout />
    </Flex>
  );
}
