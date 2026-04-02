import type { IconProps } from "../../types";

export const RightArrowWithCircleIcon = ({
  primaryColor = "#735a2a",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 12h8m0 0-3-3m3 3-3 3"
      />
      <path
        stroke={primaryColor}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"
      />
    </svg>
  );
};
