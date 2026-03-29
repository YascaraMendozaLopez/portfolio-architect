import type { IconProps } from "../../types";

export const HeroLineLeft = ({ primaryColor = "var(--color-primary-300)" }: IconProps) => {
  return (
      <svg
      width={90}
      height={617}
      viewBox="0 0 90 617"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_134_1139)">
        <path
          d="M1.114 0L0 388.759h71V609h10.5V378.259h-71L11.614 0h-10.5z"
          fill={primaryColor}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_134_1139"
          x={0}
          y={0}
          width={89.5002}
          height={617}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_134_1139"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_134_1139"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};