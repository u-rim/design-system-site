import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-blue-6)] text-white hover:bg-[var(--color-blue-7)] active:bg-[var(--color-blue-8)]',
  secondary:
    'bg-[var(--color-bluegray-2)] text-[var(--color-bluegray-9)] hover:bg-[var(--color-bluegray-3)] active:bg-[var(--color-bluegray-4)]',
  ghost:
    'text-[var(--color-blue-6)] hover:bg-[var(--color-blue-1)] active:bg-[var(--color-blue-2)]',
  danger:
    'bg-[var(--color-red-6)] text-white hover:bg-[var(--color-red-7)] active:bg-[var(--color-red-8)]',
};

const SIZE: Record<ButtonSize, string> = {
  sm: 'h-8 gap-1.5 px-[var(--spacing-4)] text-sm',
  md: 'h-10 gap-2 px-[var(--spacing-5)] text-sm',
  lg: 'h-12 gap-2 px-[var(--spacing-7)] text-base',
};

// 아이콘만 있는 버튼: 정사각형
const SIZE_ICON_ONLY: Record<ButtonSize, string> = {
  sm: 'size-8 text-sm',
  md: 'size-10 text-base',
  lg: 'size-12 text-lg',
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** 아이콘만 있는 버튼 (정사각형). aria-label 을 반드시 함께 전달하세요. */
  iconOnly?: boolean;
};

/**
 * 디자인 토큰(--color-*, --spacing-*, --radius-*)만 참조하는 예시 버튼.
 * tokens.ts 값이 바뀌면 이 컴포넌트도 자동으로 따라갑니다.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center rounded-[var(--radius-3)] font-medium transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue-6)]',
        'disabled:pointer-events-none disabled:opacity-40',
        '[&_svg]:size-[1.25em] [&_svg]:shrink-0',
        VARIANT[variant],
        iconOnly ? SIZE_ICON_ONLY[size] : SIZE[size],
        className,
      ].join(' ')}
      {...props}
    />
  );
}
