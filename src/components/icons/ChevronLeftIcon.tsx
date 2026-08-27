import type { SVGProps } from "react";

export function ChevronLeftIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 5.5L10.5 12L16.5 18.5L15 20L7.5 12L15 4L16.5 5.5Z" fill="currentColor"/>
</svg>
  );
}
