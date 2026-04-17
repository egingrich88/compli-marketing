import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

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
  "inline-flex items-center justify-center font-semibold rounded-full px-6 py-3 text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-white hover:bg-green-dark shadow-sm hover:shadow",
  secondary:
    "border border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
};

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

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
