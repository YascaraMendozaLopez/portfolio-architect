import type { IconProps } from "../../types";

export const LineProjectLeft = ({ size ="size-100", primaryColor = "var(--color-primary-300)" }: IconProps) => {
  return (
 <svg
      className={size}
      viewBox="0 0 19 419"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_134_202)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v411h11V0H0z"
          fill={primaryColor}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_134_202"
          x={0}
          y={0}
          width={19}
          height={419}
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
            result="effect1_dropShadow_134_202"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_134_202"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};