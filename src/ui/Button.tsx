import type { ElementType } from "react";

interface ButtonProps {
  text?: string;
  Icon?: ElementType;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  customClass?: string;
  id?: string;
  action?: string;
  ariaLabel?: string;
  whatsappMessage?: string;
}

const WHATSAPP_NUMBER = "59171587412";

export default function Button({
  text,
  Icon,
  onClick,
  type = "button",
  disabled = false,
  customClass = "",
  id,
  action,
  ariaLabel = "",
  whatsappMessage,
}: ButtonProps) {
  const content = (
    <>
      {Icon && <Icon size="size-6" primaryColor="var(--color-accent-900)"/>}
      {text && <span>{text}</span>}
    </>
  );

  if (whatsappMessage) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={customClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-action={action}
      className={customClass}
    >
      {content}
    </button>
  );
}