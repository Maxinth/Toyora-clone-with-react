// import img from '../../../../../../../assets/'
export const Img = (fileName: string) => {
  return `../../../../../../../assets/${fileName}.png`;
};

export interface VOption {
  initName: string;
  imageSrc: string;
  price: string;
  mainName: string;
  firstPriceText: string;
  est: string;
  MPG: number;
  MPGe: number;
}

// export interface Data { ...VOption[]}
export const data: VOption[] = [
  {
    initName: "Plug-in Hybrid",
    imageSrc: Img("priusprime-side"),
    price: "34,425",
    mainName: "2021 Prius Prime",
    firstPriceText: "28,200",
    est: "54/133",
    MPG: 61,
    MPGe: 61,
  },
  {
    initName: "Hybrid",
    imageSrc: Img("prius-side"),
    price: "30,300",
    mainName: "2021 Prius",
    firstPriceText: "24,525",
    est: "54/50",
    MPG: 11,
    MPGe: 0,
  },
  {
    initName: "Hybrid Available",
    imageSrc: Img("corolla-side"),
    price: "25975",
    mainName: "2022 Corolla",
    firstPriceText: "20075",
    est: "31/40",
    MPG: 95,
    MPGe: 0,
  },
  {
    initName: "Hybrid",
    imageSrc: Img("corollahybrid-side"),
    price: "24075",
    mainName: "2022 Corrola Hybrid",
    firstPriceText: "23650",
    est: "53/52",
    MPG: 96,
    MPGe: 0,
  },
  {
    initName: "",
    imageSrc: Img("corollahatchback-side"),
    price: "24,765",
    mainName: "2021 Corolla Hatchback",
    firstPriceText: "20,715",
    est: "30/38",
    MPG: 36,
    MPGe: 0,
  },
  {
    initName: "AWD Available",
    imageSrc: Img("camry-side"),
    price: "36,045",
    mainName: "2021 Camry",
    firstPriceText: "25,045",
    est: "28/39",
    MPG: 80,
    MPGe: 0,
  },
  {
    initName: "Hybrid",
    imageSrc: Img("camryhybrid-side"),
    price: "33,220",
    mainName: "2021 Camry Hybrid",
    firstPriceText: "27,270",
    est: "51/53",
    MPG: 80,
    MPGe: 0,
  },
  {
    initName: "AWD Available",
    imageSrc: Img("avalon-side"),
    price: "43,250",
    mainName: "2021 Avalon",
    firstPriceText: "36,125",
    est: "22/32",
    MPG: 4,
    MPGe: 0,
  },
  {
    initName: "Hybrid",
    imageSrc: Img("avalonhybrid-side"),
    price: "43,400",
    mainName: "2021 Avalon Hybrid",
    firstPriceText: "37,100",
    est: "43/44",
    MPG: 52,
    MPGe: 0,
  },
  {
    initName: "Fuel Cell Electric Vehicle",
    imageSrc: Img("mirai-side"),
    price: "66,425",
    mainName: "2021 Mirai",
    firstPriceText: "49,500",
    est: "67/64",
    MPG: 0,
    MPGe: 81,
  },
  {
    initName: "",
    imageSrc: Img("86-side"),
    price: "31,885",
    mainName: "2020 86",
    firstPriceText: "27,0606",
    est: "21/28",
    MPG: 46,
    MPGe: 0,
  },
];
