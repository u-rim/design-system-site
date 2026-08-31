import { Callout } from '@/components/Callout';
import { ColorChip } from '@/components/ColorChip';
import { scaleEntries, tokens } from '@/tokens';

type Swatch = { hex: string; name: string };

const colorScale = (
  name: string,
  obj: Record<string | number, string>,
): Swatch[] =>
  scaleEntries(obj).map(({ step, value }) => ({
    name: `${name}-${step}`,
    hex: value,
  }));

const BLUEGRAY = colorScale('bluegray', tokens.color.bluegray);
const BLUE = colorScale('blue', tokens.color.blue);
const RED = colorScale('red', tokens.color.red);
const GREEN = colorScale('green', tokens.color.green);

const OPACITY = scaleEntries(tokens.opacity)
  .map(({ step, value }) => ({ label: `Opacity-${step}`, value }))
  .sort((a, b) => b.value - a.value);

// 배경 hex 위에 흰/검 중 대비가 큰 쪽을 선택
function textOn(hex: string): string {
  const h = hex.replace('#', '');
  const lin = [0, 2, 4].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  const L = 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
  const withWhite = 1.05 / (L + 0.05);
  const withBlack = (L + 0.05) / 0.05;
  return withWhite >= withBlack ? '#ffffff' : '#212832';
}

function SwatchScale({
  label,
  swatches,
  mainIndex,
}: {
  label: string;
  swatches: Swatch[];
  mainIndex?: number;
}) {
  return (
    <div className='mb-8'>
      <p className='mb-2 text-sm font-bold text-slate-700'>{label}</p>
      <div className='overflow-x-auto'>
        <div className='min-w-[900px]'>
          {mainIndex != null && (
            <div className='grid grid-cols-10'>
              {swatches.map((s, i) => (
                <div key={s.name} className='flex flex-col items-center'>
                  {i === mainIndex && (
                    <>
                      <span className='rounded-md bg-[var(--color-brand-5)]/12 px-2 py-0.5 text-[11px] font-bold text-[var(--color-brand-5)]'>
                        main
                      </span>
                      <span className='h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-[var(--color-brand-5)]/40' />
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          <div className='grid grid-cols-10 overflow-hidden rounded-lg ring-1 ring-black/5 ring-inset'>
            {swatches.map((s) => (
              <ColorChip
                key={s.name}
                copyValue={s.hex}
                className='h-16'
                style={{ background: s.hex, color: textOn(s.hex) }}
              />
            ))}
          </div>
          <div className='grid grid-cols-10'>
            {swatches.map((s) => (
              <div key={s.name} className='px-2 pt-2'>
                <p className='text-xs font-semibold text-gray-500'>{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Color Tokens</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        컬러는 일관된 제품 경험을 제공하는데 중요한 역할을 합니다.
        <br />
        정해진 색상 규칙 안에서 유연하게 디자인 할 수 있도록 주요 색상 별, 밝기
        순으로 최대 10단계를 지원합니다.
      </p>

      <Callout title='유의사항' className='mt-8'>
        <li>
          정의되지 않은 새로운 색상은 global하게 사용하게 되는 상황에서만
          추가해요.
        </li>
        <li>색상을 추가하기 전 반드시 디자인팀에 요청해요.</li>
      </Callout>

      <h2 className='mt-16 mb-3 text-3xl font-bold text-slate-800'>Grayscale</h2>
      <p className='mb-8 text-base text-gray-500'>
        브랜드의 주요 UI와 텍스트를 구성하는 Gray 색상입니다.
      </p>

      <SwatchScale label='Bluegray' swatches={BLUEGRAY} />

      <div className='mb-8'>
        <p className='mb-2 text-sm font-bold text-slate-700'>common</p>
        <div className='grid grid-cols-2 overflow-hidden rounded-lg ring-1 ring-black/5 ring-inset'>
          <ColorChip
            copyValue={tokens.color.white}
            className='h-16'
            style={{ background: tokens.color.white, color: textOn(tokens.color.white) }}
          />
          <ColorChip
            copyValue={tokens.color.black}
            className='h-16'
            style={{ background: tokens.color.black, color: textOn(tokens.color.black) }}
          />
        </div>
        <div className='grid grid-cols-2'>
          <p className='px-2 pt-2 text-xs font-semibold text-gray-700'>white</p>
          <p className='px-2 pt-2 text-xs font-semibold text-gray-700'>black</p>
        </div>
      </div>

      <hr className='my-12 border-gray-200' />

      <h2 className='mb-3 text-3xl font-bold text-slate-800'>Color Palette</h2>
      <p className='text-base text-gray-500'>
        최대한 가이드라인에 있는 색상 사용을 권장하지만 필요에 따라 새 컬러를
        만들어 사용할 수 있습니다. 모든 컬러는 투명도 조절을 지양합니다.
      </p>

      <hr className='my-8 border-gray-200' />

      <h3 className='mb-6 text-2xl font-bold text-slate-700'>Brand color</h3>
      <SwatchScale label='blue' swatches={BLUE} mainIndex={5} />

      <h3 className='mt-12 mb-6 text-2xl font-bold text-slate-700'>System</h3>
      <SwatchScale label='red' swatches={RED} />
      <SwatchScale label='green' swatches={GREEN} />

      <hr className='my-12 border-gray-200' />

      <h2 className='mb-6 text-3xl font-bold text-slate-800'>Opacity</h2>
      <div className='overflow-x-auto'>
        <div className='min-w-[640px]'>
          <div className='grid grid-cols-5 overflow-hidden rounded-lg ring-1 ring-black/5 ring-inset'>
            {OPACITY.map((o) => (
              <div
                key={o.label}
                className='h-14'
                style={{ background: `color-mix(in srgb, ${tokens.color.bluegray[10]} ${o.value * 100}%, transparent)` }}
              />
            ))}
          </div>
          <div className='grid grid-cols-5'>
            {OPACITY.map((o) => (
              <p
                key={o.label}
                className='px-2 pt-2 text-xs font-semibold text-gray-700'
              >
                {o.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-12 rounded-xl bg-[var(--color-brand-5)]/10 px-6 py-5'>
        <p className='mb-2 font-bold text-slate-700'>&bull; 참고자료</p>
        <ul className='space-y-1'>
          <li>
            <a
              href='https://www.krds.go.kr/html/site/style/style_02.html'
              target='_blank'
              rel='noreferrer'
              className='text-sm break-all text-gray-500 hover:text-slate-800'
            >
              https://www.krds.go.kr/html/site/style/style_02.html
            </a>
          </li>
          <li>
            <a
              href='https://www.w3.org/TR/WCAG21/#contrast-minimum'
              target='_blank'
              rel='noreferrer'
              className='text-sm break-all text-gray-500 hover:text-slate-800'
            >
              https://www.w3.org/TR/WCAG21/#contrast-minimum
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
