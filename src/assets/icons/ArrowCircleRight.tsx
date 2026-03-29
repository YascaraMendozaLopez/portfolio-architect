import type { IconProps } from "../../types";

export const ArrowCircleRight = ({
  size = "size-16",
  primaryColor = "var(--color-accent-700)",
}: IconProps) => {
  return (
     <svg
      className={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        filter="url(#filter0_d_134_1298)"
        stroke={primaryColor}
        strokeWidth={3}
        strokeLinecap="round"
      >
        <path d="M23.334 19.833l7 7-7 7" strokeLinejoin="round" stroke={primaryColor} />
        <path d="M38.5 6.622A23.217 23.217 0 0026.833 3.5C13.946 3.5 3.5 13.946 3.5 26.833c0 12.887 10.446 23.334 23.333 23.334 12.887 0 23.334-10.447 23.334-23.334a23.22 23.22 0 00-3.122-11.666" />
      </g>
      <defs>
        <filter
          id="filter0_d_134_1298"
          x={0}
          y={0}
          width={57.6667}
          height={57.6667}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_134_1298"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_134_1298"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};