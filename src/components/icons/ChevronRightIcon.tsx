import type { SVGProps } from "react";

export function ChevronRightIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 18.5L13.5 12L7.5 5.5L9 4L16.5 12L9 20L7.5 18.5Z" fill="currentColor"/>
</svg>
  );
}
