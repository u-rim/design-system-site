/** 문서 페이지 공통 콜아웃. 채워진 alert 아이콘 + 제목 + 불릿 리스트. */
export function Callout({
  title = '참고사항',
  className = '',
  children,
}: {
  title?: string;
  /** 바깥 여백 등 wrapper 에 붙일 추가 클래스 (예: 'mt-8') */
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white px-5 py-4 ${className}`}
    >
      <p className='flex items-center gap-2 font-bold text-slate-700'>
        <svg
          viewBox='0 0 24 24'
          className='size-5 flex-none'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm1 13v2h-2v-2h2Zm0-8v6h-2V7h2Z'
          />
        </svg>
        {title}
      </p>
      <ul className='mt-2 list-disc space-y-1 pl-8 text-sm text-gray-500'>
        {children}
      </ul>
    </div>
  );
}
