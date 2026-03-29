import type { IconProps } from "../../types";

export const HeroLineRight = ({ primaryColor = "var(--color-accent-500)" }: IconProps) => {
  return (
     <svg
     className="auto"
      viewBox="0 0 56 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_134_1125)">
        <path d="M51.5 0v193H4v-10.5h37V0h10.5z" fill={primaryColor}/>
      </g>
      <defs>
        <filter
          id="filter0_d_134_1125"
          x={0}
          y={0}
          width={55.5}
          height={201}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_134_1125"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_134_1125"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};