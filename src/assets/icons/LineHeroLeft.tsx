import type { IconProps } from "../../types";

export const HeroLineLeft = ({ primaryColor = "var(--color-primary-300)" }: IconProps) => {
  return (
       <svg
      width={90}
      height={1112}
      viewBox="0 0 90 1112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_781_17773)">
        <path
          d="M1.114 0L0 388.759h71V609h10.5V378.259h-71L11.614 0h-10.5z"
          fill="#235347"
        />
      </g>
      <path
        opacity={0.25}
        d="M81.7 618.545V609H70.867v7.636H16.7c0 42 34.048 67.773 54.167 67.773V693H81.7v-11.455H70.867c-30.179 0-55.828-38.545-50.298-59.181h51.845v-3.819H81.7z"
        fill="#8EB69B"
        stroke="#8EB69B"
      />
      <g filter="url(#filter1_d_781_17773)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.7 693v411h11V693h-11z"
          fill="#235347"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_781_17773"
          x={0.000244141}
          y={0}
          width={89.5}
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
            result="effect1_dropShadow_781_17773"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_781_17773"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_781_17773"
          x={70.7}
          y={693}
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
            result="effect1_dropShadow_781_17773"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_781_17773"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};