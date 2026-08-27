import type { SVGProps } from "react";

export function ArrowForeIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1 13L3 13L3 11L17.1 11L11.5 5L13 3.5L21 12L13 20.5L11.5 19L17.1 13Z" fill="currentColor"/>
</svg>
  );
}
