import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

const SIZE: Record<InputSize, string> = {
  sm: 'h-8 gap-1.5 px-[var(--spacing-3)] text-sm',
  md: 'h-10 gap-2 px-[var(--spacing-4)] text-sm',
  lg: 'h-12 gap-2 px-[var(--spacing-5)] text-base',
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize;
  /** 유효성 오류 상태 (border/ring 을 red 토큰으로 전환) */
  invalid?: boolean;
  /** 앞쪽 아이콘 슬롯 (예: 돋보기) */
  leadingIcon?: ReactNode;
  /** 뒤쪽 아이콘 슬롯 (예: 지우기, 비밀번호 토글) */
  trailingIcon?: ReactNode;
};

/**
 * 디자인 토큰(--color-*, --spacing-*, --radius-*)만 참조하는 예시 인풋.
 * 바깥 wrapper 가 테두리·배경·높이를 그리고, 안쪽 <input> 은 투명 배경으로 얹힙니다.
 * tokens.ts 값이 바뀌면 이 컴포넌트도 자동으로 따라갑니다.
 */
export function Input({
  size = 'md',
  invalid = false,
  leadingIcon,
  trailingIcon,
  className = '',
  disabled,
  ...props
}: InputProps) {
  return (
    <div
      data-invalid={invalid || undefined}
      className={[
        'inline-flex w-full items-center rounded-[var(--radius-3)] border bg-white text-[var(--color-ink)] transition-colors',
        invalid
          ? 'border-[var(--color-red-6)] focus-within:ring-2 focus-within:ring-[var(--color-red-6)]/30'
          : 'border-[var(--color-border)] focus-within:border-[var(--color-blue-6)] focus-within:ring-2 focus-within:ring-[var(--color-blue-6)]/30',
        disabled
          ? 'pointer-events-none bg-[var(--color-bluegray-1)] opacity-50'
          : '',
        '[&_svg]:size-[1.25em] [&_svg]:shrink-0 [&_svg]:text-[var(--color-bluegray-5)]',
        SIZE[size],
        className,
      ].join(' ')}
    >
      {leadingIcon}
      <input
        disabled={disabled}
        className='min-w-0 flex-1 bg-transparent outline-none placeholder:text-[var(--color-bluegray-4)] disabled:cursor-not-allowed'
        {...props}
      />
      {trailingIcon}
    </div>
  );
}
