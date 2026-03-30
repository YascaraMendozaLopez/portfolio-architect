import type { IconProps } from "../../types";

export const DoorIcon = ({ size ="size-20", primaryColor = "var(--color-primary-100)" }: IconProps) => {
  return (
 <svg
      className={size}
      viewBox="0 0 66 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.25}
        d="M65.5 10.046V.5H54.667v7.636H.5c0 42 34.048 67.773 54.167 67.773V84.5H65.5V73.046H54.667C24.488 73.046-1.16 34.5 4.369 13.864h51.845v-3.819H65.5z"
        fill={primaryColor}
        stroke={primaryColor}
      />
    </svg>
  );
};