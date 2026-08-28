type Token = { name: string; px: number; usage?: string };

const SPACING: Token[] = [
  { name: 'spacing-0', px: 0 },
  { name: 'spacing-1', px: 2 },
  { name: 'spacing-2', px: 4, usage: '아이콘과 라벨 사이 등 최소 간격' },
  { name: 'spacing-3', px: 8, usage: '인접한 요소 사이 기본 간격' },
  { name: 'spacing-4', px: 12 },
  { name: 'spacing-5', px: 16, usage: '컴포넌트 내부 패딩 기본값' },
  { name: 'spacing-6', px: 20 },
  { name: 'spacing-7', px: 24, usage: '카드/섹션 내부 여백' },
  { name: 'spacing-8', px: 32 },
  { name: 'spacing-9', px: 40 },
  { name: 'spacing-10', px: 48, usage: '섹션과 섹션 사이' },
  { name: 'spacing-11', px: 64 },
  { name: 'spacing-12', px: 80, usage: '페이지 상하 큰 여백' },
];

export default function SpacingPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Spacing</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Spacing은 요소 사이의 간격과 컴포넌트 내부 여백을 정의하는 토큰입니다.
        px 단위로 관리하며 iOS는 pt, Android는 dp로 1:1 매핑됩니다.
      </p>

      <div className='mt-8 rounded-lg border border-gray-200 bg-white px-5 py-4'>
        <p className='flex items-center gap-2 font-bold text-slate-700'>
          <span aria-hidden='true'>💡</span>
          사용 원칙
        </p>
        <ul className='mt-2 list-disc space-y-1 pl-8 text-sm text-gray-500'>
          <li>임의의 px 값을 직접 쓰지 않고 항상 spacing 토큰을 참조합니다.</li>
          <li>
            간격 기준이 바뀌면 토큰 값만 수정해 모든 화면에 일관되게 반영합니다.
          </li>
        </ul>
      </div>

      <hr className='my-12 border-white' />

      <h2 className='mb-6 text-3xl font-bold text-slate-800'>Scale</h2>

      <div className='overflow-x-auto'>
        <table className='w-full min-w-[520px] border-collapse text-sm'>
          <thead>
            <tr className='border-b border-gray-200 text-left text-gray-500'>
              <th className='py-3 pr-4 font-semibold'>Token</th>
              <th className='py-3 pr-4 font-semibold'>Value</th>
              <th className='py-3 pr-4 font-semibold'>Preview</th>
              <th className='py-3 font-semibold'>Usage</th>
            </tr>
          </thead>
          <tbody>
            {SPACING.map((t) => (
              <tr key={t.name} className='border-b border-gray-100'>
                <td className='py-3 pr-4 font-semibold text-gray-700'>
                  {t.name}
                </td>
                <td className='py-3 pr-4 text-gray-500'>{t.px}px</td>
                <td className='py-3 pr-4'>
                  <span
                    className='block h-4 rounded-sm bg-[var(--color-brand-5)]'
                    style={{ width: `${t.px}px` }}
                  />
                </td>
                <td className='py-3 text-gray-400'>{t.usage ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
