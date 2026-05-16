import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "outline" | "solid";

type Props = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
};

export function Button({
  href,
  variant = "outline",
  className,
  children,
  onClick,
  type = "button",
  fullWidth,
}: Props) {
  const classes = cn(
    "btn-brutal",
    variant === "solid" && "btn-brutal--solid",
    fullWidth && "w-full justify-center",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      <ArrowRight />
    </button>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
