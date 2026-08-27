import type { SVGProps } from "react";

export function CheckIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.1715 15.8995L19.071 6L20.4852 7.41421L9.1715 18.7279L3.51465 13.0711L4.92886 11.6569L9.1715 15.8995Z" fill="currentColor"/>
</svg>
  );
}
