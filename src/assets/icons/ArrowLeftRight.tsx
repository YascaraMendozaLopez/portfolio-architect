import type { IconProps } from "../../types";

export const ArrowLeftRightIcon = ({ size = "size-10", primaryColor="var(--color-accent-500)" }: IconProps) => {
  return (
  <svg className={size} viewBox="-2 -2 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_134_4300)">
    <path d="M23.3335 19.8335L30.3335 26.8335L23.3335 33.8335" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.5001 6.62203C34.9547 4.57039 30.9296 3.49328 26.8334 3.50003C13.9464 3.50003 3.50008 13.9464 3.50008 26.8334C3.50008 39.7204 13.9464 50.1667 26.8334 50.1667C39.7204 50.1667 50.1667 39.7204 50.1667 26.8334C50.1667 22.5844 49.0304 18.5967 47.0447 15.1667" stroke={primaryColor} strokeWidth="3" strokeLinecap="round"/>
    </g>
    <defs>
      <filter id="filter0_d_134_4300" x="0" y="0" width="57.6667" height="57.6665" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_4300"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_4300" result="shape"/>
      </filter>
    </defs>
  </svg>
  );
};