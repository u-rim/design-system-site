import type { SVGProps } from "react";

export function MenuIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4H21V6H3V4Z" fill="currentColor"/>
<path d="M3 11H21V13H3V11Z" fill="currentColor"/>
<path d="M21 18H3V20H21V18Z" fill="currentColor"/>
</svg>
  );
}
