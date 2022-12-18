import { DefaultTheme } from "styled-components";

export const darktheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#607D8B",  //#f5f6fa
  accentColor: "#009688",
};

export const lighttheme: DefaultTheme = {
  bgColor: "#f5f6fa",
  textColor: "#FDD835",
  accentColor: "#E91E63",
};

export const backtheme = {darktheme, lighttheme}