import type { SVGProps } from "react";

export function WarningIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8529 2.95551C12.4645 2.30817 11.5263 2.30817 11.1379 2.95551L0.904061 20.0119C0.504147 20.6784 0.984259 21.5264 1.76155 21.5264H22.2292C23.0065 21.5264 23.4866 20.6784 23.0867 20.0119L12.8529 2.95551ZM13 14.5263V10.0263H11V14.5263H13ZM13 18.0263V16.0263H11V18.0263H13Z" fill="currentColor"/>
</svg>
  );
}
