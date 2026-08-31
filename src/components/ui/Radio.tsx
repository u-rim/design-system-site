import type { InputHTMLAttributes, ReactNode } from 'react';

export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> & {
  /** 라디오 오른쪽 레이블 */
  label?: ReactNode;
  /** 레이블 아래 보조 설명 */
  description?: ReactNode;
};

/**
 * 디자인 토큰(--color-*)만 참조하는 예시 라디오.
 * 원은 appearance-none <input> 자체가 그리고, 그 위에 가운데 점을 grid 로
 * 겹쳐 얹어 :checked 상태에서 표시합니다. (테두리만 진해지는 게 아니라 안에 점이 들어감)
 * 같은 `name` 을 가진 Radio 끼리 한 그룹으로 묶여 하나만 선택됩니다.
 */
export function Radio({
  label,
  description,
  className = '',
  disabled,
  ...props
}: RadioProps) {
  return (
    <label
      className={[
        'inline-flex items-start gap-2',
        disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer',
        className,
      ].join(' ')}
    >
      <span className='relative mt-0.5 grid size-5 shrink-0 place-items-center'>
        <input
          type='radio'
          disabled={disabled}
          className={[
            'peer col-start-1 row-start-1 size-full appearance-none rounded-full',
            'border border-[var(--color-border)] bg-white transition-colors',
            'checked:border-[var(--color-blue-6)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue-6)]/30',
          ].join(' ')}
          {...props}
        />
        <span className='pointer-events-none col-start-1 row-start-1 hidden size-2.5 rounded-full bg-[var(--color-blue-6)] peer-checked:block' />
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
