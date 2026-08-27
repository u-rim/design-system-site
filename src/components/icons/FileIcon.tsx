import type { SVGProps } from "react";

export function FileIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7.25C8.5 4.35051 10.8505 2 13.75 2C16.6495 2 19 4.3505 19 7.25V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9H7V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7.25C17 5.45507 15.5449 4 13.75 4C11.9551 4 10.5 5.45507 10.5 7.25V14.5C10.5 15.3284 11.1716 16 12 16C12.8284 16 13.5 15.3284 13.5 14.5V7H15.5V14.5C15.5 16.433 13.933 18 12 18C10.067 18 8.5 16.433 8.5 14.5V7.25Z" fill="currentColor"/>
</svg>
  );
}
