import type { SVGProps } from "react";

export function AddCircleOutlineIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 10.9393L13.0607 10.9393L13.0607 6.99999H10.9393V10.9393L7 10.9393L6.99999 13.0606L10.9393 13.0606L10.9393 17H13.0607V13.0606L17 13.0606L17 10.9393Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.92893 4.92892C8.83216 1.02569 15.1678 1.02569 19.0711 4.92892C22.9743 8.83215 22.9743 15.1678 19.0711 19.0711C15.1678 22.9743 8.83216 22.9743 4.92893 19.0711C1.0257 15.1678 1.0257 8.83215 4.92893 4.92892ZM6.34315 6.34313C9.46533 3.22095 14.5347 3.22095 17.6569 6.34313C20.779 9.46531 20.779 14.5347 17.6569 17.6568C14.5347 20.779 9.46533 20.779 6.34315 17.6568C3.22097 14.5347 3.22097 9.46531 6.34315 6.34313Z" fill="currentColor"/>
</svg>
  );
}
