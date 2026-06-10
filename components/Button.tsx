import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline-light";

type CommonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  (
    | {
        href: string;
        external?: boolean;
        onClick?: never;
        type?: never;
      }
    | {
        href?: undefined;
        external?: never;
        onClick?: () => void;
        type?: "button" | "submit" | "reset";
      }
  );

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-[2px] px-7 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-deep",
  secondary:
    "border border-ink/30 text-ink bg-transparent hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light":
    "border border-white/35 text-white bg-transparent hover:border-white hover:bg-white hover:text-ink",
};

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M1 7h11M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  external,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
