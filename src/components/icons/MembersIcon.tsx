import type { SVGProps } from "react";

export function MembersIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C11.7614 12 14 9.76142 14 7C14 4.23858 11.7614 2 9 2C6.23858 2 4 4.23858 4 7C4 9.76142 6.23858 12 9 12ZM9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10Z" fill="currentColor"/>
<path d="M15 4C16.6569 4 18 5.34315 18 7C18 8.65685 16.6569 10 15 10V12C17.7614 12 20 9.76142 20 7C20 4.23858 17.7614 2 15 2V4Z" fill="currentColor"/>
<path d="M24 19C24 16.2386 21.7614 14 19 14V16C20.6569 16 22 17.3431 22 19V22H24V19Z" fill="currentColor"/>
<path d="M5 14C2.23858 14 0 16.2386 0 19V22H2V19C2 17.3431 3.34315 16 5 16H13C14.6569 16 16 17.3431 16 19V22H18V19C18 16.2386 15.7614 14 13 14H5Z" fill="currentColor"/>
</svg>
  );
}
