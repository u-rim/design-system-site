import type { SVGProps } from "react";

export function ThumbsDownIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 13C21.5523 13 22 12.4528 22 11.7778V3.22224C22 2.54723 21.5523 2.00002 21 2.00002L18 2.00002V13H21Z" fill="currentColor"/>
<path d="M2.0537 11.5097L3.90266 3.00486C4.02968 2.42058 4.58733 2 5.23503 2L16 2L16 13L12.7506 21.6092C12.6652 21.8355 12.4276 21.9703 12.1931 21.9112C9.21684 21.1615 9.34918 18.6911 10 14.5L4.71843 14.5C3.00356 14.5 1.71738 13.0567 2.0537 11.5097Z" fill="currentColor"/>
</svg>
  );
}
