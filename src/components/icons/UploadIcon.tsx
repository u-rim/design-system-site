import type { SVGProps } from "react";

export function UploadIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V19H21V21H3Z" fill="currentColor"/>
<path d="M13 6.9L13 17H11L11 6.9L7 10.5L5.5 9L12 3L18.5 9L17 10.5L13 6.9Z" fill="currentColor"/>
</svg>
  );
}
