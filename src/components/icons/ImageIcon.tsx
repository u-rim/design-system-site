import type { SVGProps } from "react";

export function ImageIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00009 2.00003H21.0001C21.2653 2.00003 21.5197 2.10539 21.7072 2.29292C21.8947 2.48046 22.0001 2.73481 22.0001 3.00003V21C22.0001 21.2652 21.8947 21.5196 21.7072 21.7071C21.5197 21.8947 21.2653 22 21.0001 22H3.00009C2.73487 22 2.48052 21.8947 2.29298 21.7071C2.10545 21.5196 2.00009 21.2652 2.00009 21V3.00003C2.00009 2.73481 2.10545 2.48046 2.29298 2.29292C2.48052 2.10539 2.73487 2.00003 3.00009 2.00003ZM8.50009 13.5L11.0001 16.5L14.5001 12L19.0001 18H5.00009L8.50009 13.5Z" fill="currentColor"/>
</svg>
  );
}
