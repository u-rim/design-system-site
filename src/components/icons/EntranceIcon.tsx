import type { SVGProps } from "react";

export function EntranceIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4C22 2.89543 21.1046 2 20 2H13V4H20V20H13V22H20C21.1046 22 22 21.1046 22 20V4Z" fill="currentColor"/>
<path d="M11.5858 13L7.29289 17.2929L8.70711 18.7071L15.4142 12L8.70711 5.29289L7.29289 6.70711L11.5858 11L2 11V13L11.5858 13Z" fill="currentColor"/>
</svg>
  );
}
