import type { SVGProps } from "react";

export function CamOnIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 16V17C18 18.1046 17.1046 19 16 19H4C2.89543 19 2 18.1046 2 17V7C2 5.89543 2.89543 5 4 5H16C17.1046 5 18 5.89543 18 7V8L21.2764 6.3618C21.6088 6.19558 22 6.43733 22 6.80902V17.191C22 17.5627 21.6088 17.8044 21.2764 17.6382L18 16ZM15.5 7C15.7761 7 16 7.22386 16 7.5V16.5C16 16.7761 15.7761 17 15.5 17H4.5C4.22386 17 4 16.7761 4 16.5V7.5C4 7.22386 4.22386 7 4.5 7H15.5ZM18 13.7639L20 14.7639V9.23607L18 10.2361V13.7639Z" fill="currentColor"/>
</svg>
  );
}
