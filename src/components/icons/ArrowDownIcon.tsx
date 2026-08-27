import type { SVGProps } from "react";

export function ArrowDownIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 17.1V3H13V17.1L19 11.5L20.5 13L12 21L3.5 13L5 11.5L11 17.1Z" fill="currentColor"/>
</svg>
  );
}
