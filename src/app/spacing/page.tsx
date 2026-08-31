import { Callout } from '@/components/Callout';
import { scaleEntries, tokens } from '@/tokens';

// 토큰 값은 tokens.ts, 아래는 문서용 설명만
const USAGE: Record<string, string> = {
  2: '아이콘과 라벨 사이 등 최소 간격',
  3: '인접한 요소 사이 기본 간격',
  5: '컴포넌트 내부 패딩 기본값',
  7: '카드/섹션 내부 여백',
  10: '섹션과 섹션 사이',
  12: '페이지 상하 큰 여백',
};

const SPACING = scaleEntries(tokens.spacing).map(({ step, value }) => ({
  name: `spacing-${step}`,
  px: value,
  usage: USAGE[step],
}));

export default function SpacingPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Spacing</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Spacing은 요소 사이의 간격과 컴포넌트 내부 여백을 정의하는 토큰입니다.
        px 단위로 관리하며 iOS는 pt, Android는 dp로 1:1 매핑됩니다.
      </p>

      <Callout className='mt-8'>
        <li>임의의 px 값을 직접 쓰지 않고 항상 spacing 토큰을 참조해요.</li>
        <li>
          간격 기준이 바뀌면 토큰 값만 수정해 모든 화면에 일관되게 반영해요.
        </li>
      </Callout>

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
