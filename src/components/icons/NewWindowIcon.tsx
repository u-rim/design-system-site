import type { SVGProps } from "react";

export function NewWindowIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3L3 3L3 16H1L1 2C1 1.44772 1.44772 1 2 1L16 1V3Z" fill="currentColor"/>
<path d="M15.0607 15.0607L15.0607 18L12.9393 18L12.9394 15.0607L10 15.0607V12.9393H12.9394L12.9394 10H15.0607L15.0607 12.9393L18 12.9393V15.0607L15.0607 15.0607Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 6C23 5.44772 22.5523 5 22 5L6 5C5.44772 5 5 5.44772 5 6V22C5 22.5523 5.44772 23 6 23H22C22.5523 23 23 22.5523 23 22L23 6ZM21 21L21 7L7 7V21H21Z" fill="currentColor"/>
</svg>
  );
}
