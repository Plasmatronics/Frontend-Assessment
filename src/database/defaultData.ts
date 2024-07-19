import * as ChakraIcons from "@chakra-ui/icons";

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
    icon: "StarIcon",
    heading: "Industry Specific",
    text: "Fine-tuned data and trained on fence-related data only.",
  },
  {
    icon: "StarIcon",
    heading: "Industry Specific",
    text: "Fine-tuned data and trained on fence-related data only.",
  },
];

export { userData, featureData };
