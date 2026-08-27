import type { SVGProps } from "react";

export function ScreenWideIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L8.53553 8.46447L9.94975 9.87868L7.82843 12L9.94975 14.1213L8.53553 15.5355L5 12Z" fill="currentColor"/>
<path d="M19.0711 12L15.5355 15.5355L14.1213 14.1213L16.2426 12L14.1213 9.87868L15.5355 8.46447L19.0711 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5ZM20.5 5C20.7761 5 21 5.22386 21 5.5V18.5C21 18.7761 20.7761 19 20.5 19H3.5C3.22386 19 3 18.7761 3 18.5L3 5.5C3 5.22386 3.22386 5 3.5 5H20.5Z" fill="currentColor"/>
</svg>
  );
}
