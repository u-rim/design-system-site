import type { SVGProps } from "react";

export function ArrowUpIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6.9V21H11V6.9L5 12.5L3.5 11L12 3L20.5 11L19 12.5L13 6.9Z" fill="currentColor"/>
</svg>
  );
}
