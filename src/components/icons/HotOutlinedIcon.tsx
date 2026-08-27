import type { SVGProps } from "react";

export function HotOutlinedIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4163 12.6255C12.2184 12.3282 11.7816 12.3282 11.5837 12.6255L10.4029 14.4C9.41584 15.8833 10.3549 18 12 18C13.6451 18 14.5842 15.8833 13.5971 14.4L12.4163 12.6255Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 3.06669C11.6 2.53335 12.4 2.53335 12.8 3.06669L18 10C21.7082 14.9443 18.1803 22 12 22C5.81967 22 2.2918 14.9443 6.00001 10L11.2 3.06669ZM7.60001 11.2L12 5.33335L16.4 11.2C19.1194 14.8258 16.5323 20 12 20C7.46776 20 4.88066 14.8258 7.60001 11.2Z" fill="currentColor"/>
</svg>
  );
}
