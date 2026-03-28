import type { IconProps } from "../../types";

export const ArrowStudentServiceIcon = ({ size = "size-12", primaryColor="var(--color-accent-500)" }: IconProps) => {
  return (
  <svg className={size} viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 1C2 0.447715 1.55228 0 1 0C0.447716 0 0 0.447715 0 1L1 1H2ZM49.5 28.5L39.5 22.7265V34.2735L49.5 28.5ZM1 28.5H0V29.5H1V28.5ZM1 1L0 1V28.5H1H2V1H1ZM1 28.5V29.5L40.5 29.5V28.5V27.5L1 27.5V28.5Z" fill={primaryColor}/>
  </svg>
  );
};
