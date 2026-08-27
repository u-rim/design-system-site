import type { SVGProps } from "react";

export function CommentIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.09815 19.8223C3.04679 20.4385 3.56147 20.9532 4.17774 20.9019L7.00668 20.6661C8.47602 21.5145 10.1813 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.8187 2.48547 15.524 3.33389 16.9933L3.09815 19.8223ZM9 11H7V13H9V11ZM15 11H17V13H15V11ZM13 11H11V13H13V11Z" fill="currentColor"/>
</svg>
  );
}
