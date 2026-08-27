import type { SVGProps } from "react";

export function PlayIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4667 11.6C18.7333 11.8 18.7333 12.2 18.4667 12.4L7.8 20.4C7.47038 20.6472 7 20.412 7 20L7 3.99999C7 3.58797 7.47038 3.35278 7.8 3.59999L18.4667 11.6Z" fill="currentColor"/>
</svg>
  );
}
