import type { SVGProps } from "react";

export function PlaylistIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5H20V7H2V5Z" fill="currentColor"/>
<path d="M2 11H12V13H2V11Z" fill="currentColor"/>
<path d="M2 17H12V19H2V17Z" fill="currentColor"/>
<path d="M16.8201 11.6834C16.4944 11.412 16 11.6436 16 12.0675L16 19.9325C16 20.3564 16.4944 20.588 16.8201 20.3166L21.5391 16.3841C21.7789 16.1842 21.7789 15.8158 21.5391 15.6159L16.8201 11.6834Z" fill="currentColor"/>
</svg>
  );
}
