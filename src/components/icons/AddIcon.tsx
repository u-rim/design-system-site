import type { SVGProps } from "react";

export function AddIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3H11V11H3V13H11V21H13V13H21V11H13V3Z" fill="currentColor"/>
</svg>
  );
}
