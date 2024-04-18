export interface WineType {
  Alcohol: number
  "Malic Acid": number
  Ash: any
  "Alcalinity of ash": number
  Magnesium: number
  "Total phenols": number
  Flavanoids: any
  "Nonflavanoid phenols": any
  Proanthocyanins: string
  "Color intensity": any
  Hue: number
  "OD280/OD315 of diluted wines": any
  Unknown: number
}
export type TableDataType = {
  a: string;
  b: number;
  c: number;
  d: number;
}
export type MeanModeMedianReturnType = {
  mean: number;
  median: number;
  mode: number;
}