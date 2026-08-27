import type { SVGProps } from "react";

export function LayoutIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00009 2H21.0001C21.2653 2 21.5197 2.10536 21.7072 2.29289C21.8947 2.48043 22.0001 2.73478 22.0001 3V21C22.0001 21.2652 21.8947 21.5196 21.7072 21.7071C21.5197 21.8946 21.2653 22 21.0001 22H3.00009C2.73487 22 2.48052 21.8946 2.29298 21.7071C2.10545 21.5196 2.00009 21.2652 2.00009 21V3C2.00009 2.73478 2.10545 2.48043 2.29298 2.29289C2.48052 2.10536 2.73487 2 3.00009 2ZM4.00009 11V4H14V11H4.00009ZM4.00009 13V20H14V13H4.00009ZM16 20V4H20.0001V20H16Z" fill="currentColor"/>
</svg>
  );
}
