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

export { userData, featureData };
