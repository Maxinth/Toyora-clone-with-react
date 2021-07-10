export interface Items {
  optionName: string;
  withDropDown: boolean;
}

export const data: Items[] = [
  {
    optionName: "select vehicle",
    withDropDown: true,
  },
  {
    optionName: "shopping tools",
    withDropDown: true,
  },
  {
    optionName: "find a dealer",
    withDropDown: false,
  },
  {
    optionName: "build & price",
    withDropDown: false,
  },
  {
    optionName: "local specials",
    withDropDown: false,
  },
];
