import * as ChakraIcons from "@chakra-ui/icons";
import { AllChakraColors } from "../utils/types";

interface userDataType {
  firstName: string;
  lastName: string;
  pastChats?: string[];
}

type featureDataType = {
  icon: keyof typeof ChakraIcons;
  heading: string;
  text: string;
}[];

type SettingsDataType = {
  icon: keyof typeof ChakraIcons;
  text: string;
  color: AllChakraColors;
  isChat: boolean;
}[];

const userData: userDataType = {
  firstName: "Steve",
  lastName: "Secreti",
  pastChats: [
    "Fence Installation Contracts",
    "Inventory Overview",
    "Fence Types & Styles",
    "Hello World!",
  ],
};

const featureData: featureDataType = [
  {
    icon: "StarIcon",
    heading: "Industry Specific",
    text: "Fine-tuned data and trained on fence-related data only.",
  },
  {
    icon: "CheckIcon",
    heading: "Response Accuracy",
    text: "Refined data sets allow for 99% response accuracy.",
  },
  {
    icon: "TriangleUpIcon",
    heading: "Increased Efficiency",
    text: "Automate workflow tasks, fast response-rates, and more.",
  },
];

const settingsData: SettingsDataType = [
  {
    icon: "DeleteIcon",
    text: "Clear All Conversations",
    color: "stone.300",
    isChat: false,
  },
  {
    isChat: false,
    icon: "SunIcon",
    text: "Switch to Light Mode",
    color: "stone.300",
  },
  {
    isChat: false,
    icon: "StarIcon",
    text: "Upgrade to Pro",
    color: "stone.300",
  },
  {
    isChat: false,
    icon: "ExternalLinkIcon",
    text: "Updates & FAQ",
    color: "stone.300",
  },
  { isChat: false, icon: "UnlockIcon", text: "Log Out", color: "green.300" },
];

export { userData, featureData, settingsData };
