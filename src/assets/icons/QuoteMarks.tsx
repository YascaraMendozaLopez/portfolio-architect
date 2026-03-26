import type { IconProps } from "../../types";

export const QuoteMarksIcon = ({ size = "size-20", primaryColor="var(--color-accent-500)" }: IconProps) => {
  return (
    <svg className={size} viewBox="0 0 53 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_134_170)">
    <path d="M26.9244 21.7425H36.735C36.735 26.7805 35.4092 31.5532 29.0456 31.5532V40.8335C37.7956 40.8336 46.5457 33.1441 46.5457 21.7425V0H26.9244V21.7425Z" fill={primaryColor}/>
    <path d="M2.00005 21.7425H11.8107C11.8107 26.7805 10.4849 31.5532 4.12127 31.5532V40.8335C12.8713 40.8336 21.6213 33.1441 21.6213 21.7425V0H2.00005V21.7425Z" fill={primaryColor}/>
    </g>
    <defs>
      <filter id="filter0_d_134_170" x="0" y="0" width="52.5457" height="48.8335" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_170"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_170" result="shape"/>
      </filter>
    </defs>
    </svg>
  );
};
