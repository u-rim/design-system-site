type RadiusToken = { name: string; px: number; label: string; usage?: string };

const RADIUS: RadiusToken[] = [
  { name: 'radius-0', px: 0, label: '0px', usage: '표, 이미지 등 각진 요소' },
  { name: 'radius-1', px: 2, label: '2px' },
  { name: 'radius-2', px: 4, label: '4px', usage: '뱃지, 태그, 작은 칩' },
  { name: 'radius-3', px: 8, label: '8px', usage: '버튼, 인풋 기본값' },
  { name: 'radius-4', px: 12, label: '12px', usage: '카드' },
  { name: 'radius-5', px: 16, label: '16px', usage: '모달, 큰 컨테이너' },
  { name: 'radius-6', px: 24, label: '24px', usage: '히어로 영역, 강조 카드' },
  {
    name: 'radius-full',
    px: 9999,
    label: 'full',
    usage: '아바타, 파일 칩, 원형 버튼',
  },
];

export default function RadiusPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Radius</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Radius는 모서리 둥글기를 정의하는 토큰입니다. 컴포넌트의 성격과 크기에
        따라 단계별 값을 사용합니다.
      </p>

      <div className='mt-8 rounded-lg border border-gray-200 bg-white px-5 py-4'>
        <p className='flex items-center gap-2 font-bold text-slate-700'>
          <span aria-hidden='true'>💡</span>
          사용 원칙
        </p>
        <ul className='mt-2 list-disc space-y-1 pl-8 text-sm text-gray-500'>
          <li>
            컴포넌트가 클수록 큰 radius 토큰을 사용해 시각적 비율을 맞춥니다.
          </li>
          <li>원형이 필요한 요소는 radius-full을 사용합니다.</li>
        </ul>
      </div>

      <hr className='my-12 border-white' />

      <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4'>
        {RADIUS.map((t) => (
          <div key={t.name}>
            <div
              className='flex h-28 items-center justify-center border border-[var(--color-brand-5)]/30 bg-[var(--color-brand-5)]/10'
              style={{ borderRadius: `${t.px}px` }}
            />
            <p className='mt-3 text-sm font-semibold text-gray-700'>{t.name}</p>
            <p className='text-xs text-gray-400'>{t.label}</p>
            {t.usage && (
              <p className='mt-1 text-xs leading-snug text-gray-400'>
                {t.usage}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
