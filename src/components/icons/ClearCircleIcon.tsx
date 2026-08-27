import type { SVGProps } from "react";

export function ClearCircleIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 10.5L14.6088 7.89125L16.1088 9.39125L13.5 12L16.1088 14.6088L14.6088 16.1088L12 13.5L9.39124 16.1088L7.89124 14.6088L10.5 12L7.89124 9.39124L9.39124 7.89124L12 10.5Z" fill="currentColor"/>
</svg>
  );
}
