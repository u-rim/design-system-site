import type { SVGProps } from "react";

export function MinusIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11V13H21V11H3Z" fill="currentColor"/>
</svg>
  );
}
