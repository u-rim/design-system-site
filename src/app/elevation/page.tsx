import { scaleEntries, tokens } from '@/tokens';

const ELEVATION = scaleEntries(tokens.elevation).map(({ step, value }) => ({
  name: `elevation-${step}`,
  shadow: value,
}));

export default function ElevationPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Elevation</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Elevation은 서로 다른 시각적 레벨에 위치하도록 하여 깊이감과 계층 구조를
        표현하기 위한 그림자 요소입니다.
      </p>

      <hr className='my-12 border-white' />

      <h2 className='mb-6 text-3xl font-bold text-slate-800'>Scale</h2>

      <div className='overflow-x-auto'>
        <table className='w-full min-w-[520px] border-collapse text-sm'>
          <thead>
            <tr className='border-b border-gray-200 text-left text-gray-500'>
              <th className='py-3 pr-4 font-semibold'>Token</th>
              <th className='py-3 pr-4 font-semibold'>Preview</th>
              <th className='py-3 font-semibold'>Value</th>
            </tr>
          </thead>
          <tbody>
            {ELEVATION.map((t) => (
              <tr key={t.name} className='border-b border-gray-100'>
                <td className='py-6 pr-4 align-middle font-semibold text-gray-700'>
                  {t.name}
                </td>
                <td className='py-6 pr-4 align-middle'>
                  <span
                    className='block size-14 rounded-lg bg-white'
                    style={{ boxShadow: t.shadow }}
                  />
                </td>
                <td className='py-6 align-middle text-xs break-all text-gray-400'>
                  {t.shadow}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
