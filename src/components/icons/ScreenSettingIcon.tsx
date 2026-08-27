import type { SVGProps } from "react";

export function ScreenSettingIcon({ className = "size-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1743 7.30095C12.7746 6.20554 11.2254 6.20553 10.8257 7.30095L9.81043 10.0837L8.09154 10.8611C7.11169 11.3042 7.1117 12.6958 8.09154 13.1389L9.81043 13.9163L10.8257 16.6991C11.2254 17.7945 12.7746 17.7945 13.1743 16.699L14.1895 13.9163L15.9084 13.1389C16.8883 12.6958 16.8883 11.3042 15.9084 10.8611L14.1895 10.0837L13.1743 7.30095ZM11.401 11.5593L12 9.91756L12.599 11.5593L13.5733 12L12.599 12.4407L12 14.0824L11.401 12.4407L10.4266 12L11.401 11.5593Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5ZM20.5 5C20.7761 5 21 5.22386 21 5.5V18.5C21 18.7761 20.7761 19 20.5 19H3.5C3.22386 19 3 18.7761 3 18.5L3 5.5C3 5.22386 3.22386 5 3.5 5H20.5Z" fill="currentColor"/>
</svg>
  );
}
