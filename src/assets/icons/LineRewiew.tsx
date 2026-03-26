import type { IconProps } from "../../types";

export const LineReviewIcon = ({ primaryColor="var(--color-accent-500)" }: IconProps) => {
  return (
  <svg className="auto" viewBox="0 0 481 271" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_134_1391)">
      <path d="M0 29.2422V262.499H10.5644V39.8112L472.121 40.812V0H461.34V29.9767L0 29.2422Z" fill={primaryColor}/>
    </g>
    <defs>
      <filter id="filter0_d_134_1391" x="0" y="0" width="480.121" height="270.499" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_134_1391"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_134_1391" result="shape"/>
      </filter>
    </defs>
  </svg>
  );
};