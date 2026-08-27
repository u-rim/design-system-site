import type { SVGProps } from "react";

export function ChevronDownIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 8.5L12 14.5L18.5 8.5L20 10L12 17.5L4 10L5.5 8.5Z" fill="currentColor"/>
</svg>
  );
}
