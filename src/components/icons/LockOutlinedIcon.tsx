import type { SVGProps } from "react";

export function LockOutlinedIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 13.5V17.5H10.5V13.5H13.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6.5V9H3V22H21V9H17.5V6.5C17.5 3.46243 15.0376 1 12 1C8.96243 1 6.5 3.46243 6.5 6.5ZM12 3C10.067 3 8.5 4.567 8.5 6.5V9H15.5V6.5C15.5 4.567 13.933 3 12 3ZM5 11V20H19V11H5Z" fill="currentColor"/>
</svg>
  );
}
