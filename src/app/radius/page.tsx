import { Callout } from '@/components/Callout';
import { scaleEntries, tokens } from '@/tokens';

// 토큰 값은 tokens.ts, 아래는 문서용 설명만
const USAGE: Record<string, string> = {
  0: '표, 이미지 등 각진 요소',
  2: '뱃지, 태그, 작은 칩',
  3: '버튼, 인풋 기본값',
  4: '카드',
  5: '모달, 큰 컨테이너',
  6: '히어로 영역, 강조 카드',
  full: '아바타, 파일 칩, 원형 버튼',
};

const RADIUS = scaleEntries(tokens.radius).map(({ step, value }) => ({
  name: `radius-${step}`,
  px: value,
  label: step === 'full' ? 'full' : `${value}px`,
  usage: USAGE[step],
}));

export default function RadiusPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Radius</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Radius는 모서리 둥글기를 정의하는 토큰입니다. 컴포넌트의 성격과 크기에
        따라 단계별 값을 사용합니다.
      </p>

      <Callout className='mt-8'>
        <li>컴포넌트가 클수록 큰 radius 토큰을 사용해 시각적 비율을 맞춰요.</li>
        <li>원형이 필요한 요소는 radius-full을 사용해요.</li>
      </Callout>

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
