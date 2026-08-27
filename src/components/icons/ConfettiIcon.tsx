import type { SVGProps } from "react";

export function ConfettiIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1808 3.51764L17.2489 3L16.4693 5.90945L14.5375 5.39181L13.2465 10.2098L15.1784 10.7274L15.9517 7.8413L17.8835 8.35894L19.1808 3.51764Z" fill="currentColor"/>
<path d="M20.4683 10.462L21.4683 12.1941L17.1382 14.6941L16.1382 12.962L20.4683 10.462Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.40421 7.70843C7.52175 7.35581 7.96928 7.25016 8.2321 7.51299L16.9875 16.2684C17.2503 16.5312 17.1447 16.9787 16.792 17.0963L3.65898 21.4739C3.2681 21.6042 2.89623 21.2324 3.02652 20.8415L7.40421 7.70843Z" fill="currentColor"/>
<path d="M11.9456 6.88909C11.3598 7.47487 10.4101 7.47487 9.8243 6.88909C9.23851 6.3033 9.23851 5.35355 9.8243 4.76777C10.4101 4.18198 11.3598 4.18198 11.9456 4.76777C12.5314 5.35355 12.5314 6.3033 11.9456 6.88909Z" fill="currentColor"/>
</svg>
  );
}
