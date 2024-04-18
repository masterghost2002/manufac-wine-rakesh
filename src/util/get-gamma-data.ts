import type { WineType } from "../types";
// simple utility function to calculate the gamma from ash magnesium and hue
export default function getGammaData(item:WineType){
    const ash = item['Ash'];
    const hue = item['Hue'];
    const magnesium = item['Magnesium'];
    return (hue*ash)/magnesium;
};