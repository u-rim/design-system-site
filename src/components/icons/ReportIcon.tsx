import type { SVGProps } from "react";

export function ReportIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.93333V17H20V9.93333C20 5.55187 16.4183 2 12 2C7.58172 2 4 5.55187 4 9.93333ZM13 6V11H11V6H13ZM13 12V14H11V12H13Z" fill="currentColor"/>
<path d="M4 18C2.89543 18 2 18.8954 2 20V22H22V20C22 18.8954 21.1046 18 20 18H4Z" fill="currentColor"/>
</svg>
  );
}
