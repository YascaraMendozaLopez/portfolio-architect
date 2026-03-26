import type { IconProps } from "../../types";

export const ArrowUpDownIcon = ({ size = "size-16", primaryColor="var(--color-accent-500)" }: IconProps) => {
  return (
  <svg className={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 18.6665V37.3332M28 37.3332L35 30.3332M28 37.3332L21 30.3332" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.3334 7.78854C19.8788 5.73689 23.9039 4.65978 28.0001 4.66654C40.8871 4.66654 51.3334 15.1129 51.3334 27.9999C51.3334 40.8869 40.8871 51.3332 28.0001 51.3332C15.1131 51.3332 4.66675 40.8869 4.66675 27.9999C4.66675 23.7509 5.80308 19.7632 7.78875 16.3332" stroke={primaryColor} strokeWidth="2" strokeLinecap="round"/>
  </svg>
  );
};