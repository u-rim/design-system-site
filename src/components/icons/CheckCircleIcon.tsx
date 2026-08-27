import type { SVGProps } from "react";

export function CheckCircleIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.2447 7.755L10.5879 13.4119L7.75943 10.5834L6.34521 11.9976L10.5879 16.2403L17.6589 9.16922L16.2447 7.755Z" fill="currentColor"/>
</svg>
  );
}
