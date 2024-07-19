import { Flex } from "@chakra-ui/react";
import Feature from "./Feature";
import { featureData } from "../../database/defaultData";

export default function Features() {
  return (
    <Flex sx={{ gap: "1.3rem" }}>
      {featureData.map((featureObject, index) => (
        <Feature
          icon={featureObject.icon}
          heading={featureObject.heading}
          text={featureObject.text}
          key={index}
        />
      ))}
    </Flex>
  );
}