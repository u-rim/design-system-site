import type { SVGProps } from "react";

export function HomeIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11L12 3L3 11V22H21V11ZM12 5.67591L19 11.8981V20H13V15H11V20H5V11.8981L12 5.67591Z" fill="currentColor"/>
</svg>
  );
}
