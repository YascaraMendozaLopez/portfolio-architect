import type { IconProps } from "../../types";

export const LogoIcon = ({ size = "size-20" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={size}
      fill="none"
      viewBox="0 0 70 72"
    >
      <g filter="url(#a)">
        <path fill="#735a2a" d="m35 64 13.12-8.331V42.7L35 51.032z" />
        <path
          fill="#735a2a"
          d="M66 44.316V9.8l-12.61-8.02v23.327L35 36.584v5.78l15.435-9.624 2.955-1.853v21.45z"
        />
        <path
          fill="#4e4027"
          fillRule="evenodd"
          d="M48.12 42.7 35 51.033v-2.354l11.124-7.276z"
          clipRule="evenodd"
        />
        <path fill="#735a2a" d="M21.88 42.7 35 51.033v-2.354l-11.237-7.17z" />
        <path fill="#c9a96e" d="M21.88 55.669 35 64V51.032l-13.12-8.331z" />
        <path
          fill="#c9a96e"
          d="M16.61 18.487 4 26.508v17.808l12.61 7.927V30.606l2.546 1.697L35 42.363v-5.779l-18.39-11.29z"
        />
        <path fill="#735a2a" d="M16.61 30.606v21.637l2.546-1.621v-18.32z" />
        <path
          fill="#4e4027"
          d="M53.39 39.089v-8.202l-2.955 1.852v17.702l2.955 1.896z"
        />
        <path
          fill="#735a2a"
          fillRule="evenodd"
          d="m35 36.584-18.39-11.29 2.546-1.816L35 33.348z"
          clipRule="evenodd"
        />
        <path fill="#735a2a" d="M16.61 18.487v6.808l2.546-1.817v-6.629z" />
        <path
          fill="#4e4027"
          fillRule="evenodd"
          d="M35 36.584v-3.236l15.435-9.962 2.955 1.722z"
          clipRule="evenodd"
        />
        <path fill="#4e4027" d="M53.39 25.108V1.78L50.435 0v23.386z" />
        <path
          stroke="#031210"
          strokeLinejoin="round"
          strokeOpacity=".15"
          strokeWidth=".5"
          d="M34.75 51.169v12.376L22.129 55.53V43.155zm13.121 4.362L35.25 63.545V51.169l12.621-8.014zm5.269-3.652-2.455-1.575V32.877l2.455-1.54zM16.36 25.304l.008.054a.3.3 0 0 0 .027.063l.014.02q.011.017.026.03.01.01.02.017l.025.02 18.27 11.216v5.184l-15.46-9.816-2.541-1.694-.061-.03a.25.25 0 0 0-.328.238V51.79L4.25 44.178V26.645l12.11-7.704zm18.39 23.51v1.763L22.346 42.7l1.416-.896zm12.908-6.117-12.408 7.88v-1.764L46.123 41.7zM34.75 33.485v2.652L17.063 25.278l2.102-1.5zm18.154-8.37L35.25 36.132v-2.65l15.19-9.804zm-33.998-1.766-2.046 1.46v-6.186l2.046-1.316zM53.14 1.922v22.75l-2.455-1.43V.441zm.5 28.965a.25.25 0 0 0-.323-.24l-.06.028-2.955 1.852-.003.002-15.049 9.384v-5.19L53.522 25.32a.25.25 0 0 0 .09-.101.3.3 0 0 0 .02-.048l.008-.063V2.234l12.11 7.704v34.24l-12.11 7.704zm-36.78.186 2.046 1.364v18.047l-2.046 1.303z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="70"
          height="72"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_134_1124"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_134_1124"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
