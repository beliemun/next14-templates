export type TextColor = "default" | "description" | "disabled";

export type TextType =
  | "sm-light"
  | "sm-normal"
  | "sm-regular"
  | "sm-semibold"
  | "sm-bold"
  | "base-light"
  | "base-normal"
  | "base-regular"
  | "base-semibold"
  | "base-bold"
  | "lg-light"
  | "lg-normal"
  | "lg-regular"
  | "lg-semibold"
  | "lg-bold"
  | "xl-light"
  | "xl-normal"
  | "xl-regular"
  | "xl-semibold"
  | "xl-bold"
  | "2xl-light"
  | "2xl-normal"
  | "2xl-regular"
  | "2xl-semibold"
  | "2xl-bold";

export const TextStyle: Record<TextType, string> = {
  "sm-light": "text-sm font-light",
  "sm-normal": "text-sm font-normal",
  "sm-regular": "text-sm font-regular",
  "sm-semibold": "text-sm font-semibold",
  "sm-bold": "text-sm font-bold",
  "base-light": "text-base font-light",
  "base-normal": "text-base font-normal",
  "base-regular": "text-base font-regular",
  "base-semibold": "text-base font-semibold",
  "base-bold": "text-base font-bold",
  "lg-light": "text-lg font-light",
  "lg-normal": "text-lg font-normal",
  "lg-regular": "text-lg font-regular",
  "lg-semibold": "text-lg font-semibold",
  "lg-bold": "text-lg font-bold",
  "xl-light": "text-xl font-light",
  "xl-normal": "text-xl font-normal",
  "xl-regular": "text-xl font-regular",
  "xl-semibold": "text-xl font-semibold",
  "xl-bold": "text-xl font-bold",
  "2xl-light": "text-2xl font-light",
  "2xl-normal": "text-2xl font-normal",
  "2xl-regular": "text-2xl font-regular",
  "2xl-semibold": "text-2xl font-semibold",
  "2xl-bold": "text-2xl font-bold",
};
