import type { SVGProps } from "react";

export function DeleteIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2V4H3V6H21V4H13V2H11Z" fill="currentColor"/>
<path d="M4 7H6L6.5 20H17.5L18 7H20L19.5322 21.0333C19.5143 21.5723 19.0721 22 18.5328 22H5.46722C4.92791 22 4.48574 21.5723 4.46778 21.0333L4 7Z" fill="currentColor"/>
<path d="M9 9V18H11V9H9Z" fill="currentColor"/>
<path d="M13 18V9H15V18H13Z" fill="currentColor"/>
</svg>
  );
}
