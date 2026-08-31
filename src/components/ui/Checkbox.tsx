'use client';

import type { InputHTMLAttributes, ReactNode } from 'react';
import { CheckIcon, MinusIcon } from '@/components/icons';

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> & {
  /** 체크박스 오른쪽 레이블 */
  label?: ReactNode;
  /** 레이블 아래 보조 설명 */
  description?: ReactNode;
  /** 부분 선택 상태 ("전체 선택" 부모 등) */
  indeterminate?: boolean;
};

/**
 * 디자인 토큰(--color-*, --radius-*)만 참조하는 예시 체크박스.
 * 박스는 appearance-none <input> 자체가 그리고, 그 위에 아이콘 컴포넌트를
 * grid 로 겹쳐 얹어 :checked / :indeterminate 상태에서 표시합니다.
 * 배경은 항상 흰색 — 선택되면 색이 채워지는 게 아니라 안에 체크 아이콘이 들어갑니다.
 */
export function Checkbox({
  label,
  description,
  indeterminate = false,
  className = '',
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <label
      className={[
        'inline-flex items-start gap-2',
        disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer',
        className,
      ].join(' ')}
    >
      <span className='relative mt-0.5 grid size-5 shrink-0 place-items-center text-[var(--color-blue-6)]'>
        <input
          type='checkbox'
          disabled={disabled}
          ref={(el) => {
            if (el) el.indeterminate = indeterminate;
          }}
          className={[
            'peer col-start-1 row-start-1 size-full appearance-none rounded-[var(--radius-2)]',
            'border border-[var(--color-border)] bg-white transition-colors',
            'checked:border-[var(--color-blue-6)] indeterminate:border-[var(--color-blue-6)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue-6)]/30',
          ].join(' ')}
          {...props}
        />
        <CheckIcon className='pointer-events-none col-start-1 row-start-1 hidden size-3.5 peer-checked:block peer-indeterminate:hidden' />
        <MinusIcon className='pointer-events-none col-start-1 row-start-1 hidden size-3.5 peer-indeterminate:block' />
      </span>
      {(label || description) && (
        <span className='flex flex-col'>
          {label && (
            <span className='text-sm text-[var(--color-ink)]'>{label}</span>
          )}
          {description && (
            <span className='text-sm text-gray-400'>{description}</span>
          )}
        </span>
      )}
    </label>
  );
}
