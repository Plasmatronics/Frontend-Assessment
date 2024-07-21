import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

import SidebarLayout from "../components/sidebar/SidebarLayout";
import MainLayout from "../components/main/MainLayout";
import { useCloseTaskbar } from "../contexts/CloseTaskbarContext";
import { SHOW_SIDEBAR_WIDTH } from "../utils/config";

export default function AppLayout() {
	const { tabOpen, ref } = useCloseTaskbar(); //This hook seems similar to the logic used in Chakra's `Drawer` component, good idea.
	const [isLargerThan800] = useMediaQuery(`(min-width: ${SHOW_SIDEBAR_WIDTH})`); //This could be substituted for `useBreakpointValue`

	return (
		<Flex overflowX="hidden" position="relative" height="100vh" width="100vw" bg="primaryColor" //Likely cause for dark-mode issues
		>
			<Box //Can opt for a ChakraUI `Drawer` component here
				ref={ref}
				zIndex={100} //Prefer semantic tokens from ChakraUI (https://v2.chakra-ui.com/docs/styled-system/theme#z-index-values)
				position={tabOpen ? "fixed" : "relative"}
				width={{
					base: tabOpen ? "200px" : "0px",
					sm: tabOpen ? "250px" : "0px",
					md: "275px",
				}}
			>
				{/* // prop drilling just a level or two is fine here */}
				<SidebarLayout isLargerThan800={isLargerThan800} />
			</Box>
			{
				//Prefer semantic tokens for zIndex values ^
			}
			<Box zIndex={10} flex={1}>
				<MainLayout />
			</Box>
		</Flex>
	);
}
