import type { SVGProps } from "react";

export function MoveRightIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5H2V19H4V5Z" fill="currentColor"/>
<path d="M21.4142 12.2071L14.5 19.1213L13.0858 17.7071L17.5858 13.2071H5V11.2071L17.5858 11.2071L13.0858 6.70711L14.5 5.29289L21.4142 12.2071Z" fill="currentColor"/>
</svg>
  );
}
