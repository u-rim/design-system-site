import type { SVGProps } from "react";

export function AddCircleIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.92893 4.92892C8.83216 1.02569 15.1678 1.02569 19.0711 4.92892C22.9743 8.83215 22.9743 15.1678 19.0711 19.0711C15.1678 22.9743 8.83216 22.9743 4.92893 19.0711C1.0257 15.1678 1.0257 8.83215 4.92893 4.92892ZM13.0607 10.9393L17 10.9393L17 13.0606L13.0607 13.0606L13.0607 17L10.9393 17L10.9393 13.0606L7 13.0606V10.9393L10.9393 10.9393V6.99998H13.0607V10.9393Z" fill="currentColor"/>
</svg>
  );
}
