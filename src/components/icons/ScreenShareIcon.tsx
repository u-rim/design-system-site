import type { SVGProps } from "react";

export function ScreenShareIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.41421 12.364L7 10.9497L11.9497 6L16.8995 10.9497L15.4853 12.364L12.9497 9.82843L12.9497 17.1421H10.9497V9.82843L8.41421 12.364Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3H3ZM21 5.5C21 5.22386 20.7761 5 20.5 5H3.5C3.22386 5 3 5.22386 3 5.5L3 18.5C3 18.7761 3.22386 19 3.5 19H20.5C20.7761 19 21 18.7761 21 18.5V5.5Z" fill="currentColor"/>
</svg>
  );
}
