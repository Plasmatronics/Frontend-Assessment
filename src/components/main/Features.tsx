import { Flex } from "@chakra-ui/react";

import Feature from "./Feature";
import { featureData } from "../../database/defaultData";

//one job to map over the feaure component and display it
export default function Features() {
  return (
    <Flex wrap="wrap" justifyContent={"center"} sx={{ gap: "1.3rem" }}>
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
