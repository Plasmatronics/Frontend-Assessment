import { AllChakraColors } from "./types";

//darkens the color by one shade
export function colorDarkener(color: AllChakraColors): AllChakraColors {
  const colorAndVariation: string[] = color.split(".");
  const oldColorPrefix = colorAndVariation[0];
  const oldColorVariation = Number(colorAndVariation[1]);
  //there is no higher value than this so well return og color
  if (oldColorVariation === 900) return color;

  const newColorVariation = String(oldColorVariation + 100);
  const newColor = oldColorPrefix + "." + newColorVariation;
  return newColor as AllChakraColors;
}

//lightens the color by one shade
export function colorLightener(color: AllChakraColors): AllChakraColors {
  const colorAndVariation: string[] = color.split(".");
  const oldColorPrefix = colorAndVariation[0];
  const oldColorVariation = Number(colorAndVariation[1]);

  //there is no lower value than this so well return og color
  if (oldColorVariation === 50) return color;

  //if value is 100 well subtract 50, otherwise well subtract 100
  const newColorVariation = String(
    oldColorVariation - (oldColorVariation === 100 ? 50 : 100)
  );

  const newColor = oldColorPrefix + "." + newColorVariation;
  return newColor as AllChakraColors;
}
