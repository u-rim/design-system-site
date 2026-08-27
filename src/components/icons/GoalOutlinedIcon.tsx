import type { SVGProps } from "react";

export function GoalOutlinedIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3V21H6V14H19.8705C20.2564 14 20.4968 13.5814 20.3024 13.2481L17.5327 8.5L20.3024 3.75194C20.4968 3.41861 20.2564 3 19.8705 3H4ZM6 12H17.259L15.2173 8.5L17.259 5H6V12Z" fill="currentColor"/>
</svg>
  );
}
