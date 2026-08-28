'use client';

import { useState } from 'react';

export function ColorChip({
  copyValue,
  display,
  className = '',
  style,
}: {
  copyValue: string;
  display?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      /* clipboard 미지원 환경 무시 */
    }
  };

  return (
    <button
      type='button'
      onClick={handleCopy}
      title={`${copyValue} 복사`}
      style={style}
      className={`flex w-full cursor-pointer items-start px-2 py-1.5 text-left text-[11px] font-medium transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-5)] focus-visible:ring-inset ${className}`}
    >
      {copied ? '복사됨!' : (display ?? copyValue)}
    </button>
  );
}
