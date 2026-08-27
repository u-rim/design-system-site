import type { SVGProps } from "react";

export function QuitIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H11V20H4V4H11V2H4Z" fill="currentColor"/>
<path d="M15.2929 6.70711L19.5858 11L10 11V13L19.5858 13L15.2929 17.2929L16.7071 18.7071L23.4142 12L16.7071 5.29289L15.2929 6.70711Z" fill="currentColor"/>
</svg>
  );
}
