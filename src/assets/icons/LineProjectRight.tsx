import type { IconProps } from "../../types";

export const LineProjectRight = ({ size ="size-20", primaryColor = "var(--color-primary-300)" }: IconProps) => {
  return (
 <svg
      className={size}
      viewBox="0 0 75 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_134_214)" fill={primaryColor}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.61 0v56H56V0h10.61z"
        />
        <path d="M56 56H0V45h56v11z" />
      </g>
      <defs>
        <filter
          id="filter0_d_134_214"
          x={0}
          y={0}
          width={74.6106}
          height={64}
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
            result="effect1_dropShadow_134_214"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_134_214"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};