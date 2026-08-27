import type { SVGProps } from "react";

export function ArrowBackIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.9 11L21 11V13H6.9L12.5 19L11 20.5L3 12L11 3.5L12.5 5L6.9 11Z" fill="currentColor"/>
</svg>
  );
}
