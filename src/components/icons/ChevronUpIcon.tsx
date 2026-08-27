import type { SVGProps } from "react";

export function ChevronUpIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 16.5L12 10.5L5.5 16.5L4 15L12 7.5L20 15L18.5 16.5Z" fill="currentColor"/>
</svg>
  );
}
