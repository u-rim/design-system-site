import type { SVGProps } from "react";

export function DownloadIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 13.6V3H13V13.6L17 10L18.5 11.5L12 17.5L5.5 11.5L7 10L11 13.6Z" fill="currentColor"/>
<path d="M3 21V19H21V21H3Z" fill="currentColor"/>
</svg>
  );
}
