import type { IconProps } from "../../types";

export const WhatsappIcon = ({ size = "size-6", primaryColor="var(--color-accent-500)" }: IconProps) => {
  return (
  <svg className={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12C22 17.523 17.523 22 12 22C10.2445 22.0024 8.51963 21.5408 7 20.662L2 21.5L2.832 16C2.28235 14.7381 1.9991 13.3764 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z" stroke={primaryColor} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.96 13.868L15.04 13.462L17 14.215V16.038C17 16.645 16.478 17.108 15.89 16.978C14.367 16.644 11.6 15.804 9.678 13.868C7.848 12.025 7.223 9.458 7.01 8.041C6.925 7.474 7.374 7 7.943 7H9.837L10.572 8.969L10.183 11.07" stroke={primaryColor} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};