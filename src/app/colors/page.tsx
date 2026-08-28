import { ColorChip } from '@/components/ColorChip';

type Swatch = { hex: string; name: string; contrast: string };

const BLUEGRAY: Swatch[] = [
  { hex: '#F8F9FA', name: 'bluegray-1', contrast: 'W1.05,B19.92' },
  { hex: '#DDE3E9', name: 'bluegray-2', contrast: 'W1.29,B16.24' },
  { hex: '#C4CCD4', name: 'bluegray-3', contrast: 'W1.62,B12.93' },
  { hex: '#929EAA', name: 'bluegray-4', contrast: 'W2.73,B7.69' },
  { hex: '#697787', name: 'bluegray-5', contrast: 'W4.58,B4.59' },
  { hex: '#4F5C6A', name: 'bluegray-6', contrast: 'W6.84,B3.07' },
  { hex: '#3C4551', name: 'bluegray-7', contrast: 'W9.71,B2.16' },
  { hex: '#2C343F', name: 'bluegray-8', contrast: 'W12.57,B1.67' },
  { hex: '#212832', name: 'bluegray-9', contrast: 'W14.85,B1.41' },
  { hex: '#11161F', name: 'bluegray-10', contrast: 'W18.13,B1.16' },
];

const BLUE: Swatch[] = [
  { hex: '#EBEEFF', name: 'blue-1', contrast: 'W1.15, B18.21' },
  { hex: '#E0E3FF', name: 'blue-2', contrast: 'W1.26, B16.6' },
  { hex: '#CCD1FE', name: 'blue-3', contrast: 'W1.49, B14.12' },
  { hex: '#B1B8FF', name: 'blue-4', contrast: 'W1.88, B11.17' },
  { hex: '#9195DE', name: 'blue-5', contrast: 'W2.78, B7.56' },
  { hex: '#7167D0', name: 'blue-6', contrast: 'W4.61, B4.55' },
  { hex: '#5C3FD0', name: 'blue-7', contrast: 'W6.83, B3.08' },
  { hex: '#4522D2', name: 'blue-8', contrast: 'W8.7, B2.41' },
  { hex: '#2606A6', name: 'blue-9', contrast: 'W12.66, B1.66' },
  { hex: '#160461', name: 'blue-10', contrast: 'W17.16, B1.22' },
];

const RED: Swatch[] = [
  { hex: '#FFECEB', name: 'red-1', contrast: 'W1.14,B18.45' },
  { hex: '#FFD5D2', name: 'red-2', contrast: 'W1.34,B15.7' },
  { hex: '#FFC2BE', name: 'red-3', contrast: 'W1.53,B13.71' },
  { hex: '#FF9189', name: 'red-4', contrast: 'W2.17,B9.66' },
  { hex: '#F66C62', name: 'red-5', contrast: 'W2.9,B7.24' },
  { hex: '#EB5A4F', name: 'red-6', contrast: 'W3.44,B6.11' },
  { hex: '#CE453B', name: 'red-7', contrast: 'W4.63,B4.54' },
  { hex: '#AE2E24', name: 'red-8', contrast: 'W6.53,B3.22' },
  { hex: '#5D1F1A', name: 'red-9', contrast: 'W12.53,B1.68' },
  { hex: '#42221F', name: 'red-10', contrast: 'W14.19,B1.48' },
];

const GREEN: Swatch[] = [
  { hex: '#EBF7EF', name: 'green-1', contrast: 'W1.1,B19.08' },
  { hex: '#D7EFDE', name: 'green-2', contrast: 'W1.21,B17.29' },
  { hex: '#AFDFBE', name: 'green-3', contrast: 'W1.49,B14.12' },
  { hex: '#87CF9D', name: 'green-4', contrast: 'W1.84,B11.44' },
  { hex: '#5FBF7C', name: 'green-5', contrast: 'W2.28,B9.23' },
  { hex: '#519C68', name: 'green-6', contrast: 'W3.33,B6.31' },
  { hex: '#468259', name: 'green-7', contrast: 'W4.57,B4.6' },
  { hex: '#30603E', name: 'green-8', contrast: 'W7.32,B2.87' },
  { hex: '#24482E', name: 'green-9', contrast: 'W10.29,B2.04' },
  { hex: '#18301F', name: 'green-10', contrast: 'W14.18,B1.48' },
];

const OPACITY = [
  { label: 'Opacity-80', value: 0.8 },
  { label: 'Opacity-60', value: 0.6 },
  { label: 'Opacity-40', value: 0.4 },
  { label: 'Opacity-20', value: 0.2 },
  { label: 'Opacity-10', value: 0.1 },
];

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

      <div className='mt-8 rounded-lg border border-gray-200 bg-white px-5 py-4'>
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
          유의사항
        </p>
        <ul className='mt-2 list-disc space-y-1 pl-8 text-sm text-gray-500'>
          <li>
            정의되지 않은 새로운 색상은 global하게 사용하게 되는 상황에서만
            추가합니다.
          </li>
          <li>색상을 추가하기 전 반드시 디자인팀에게 요청해주세요.</li>
        </ul>
      </div>

      <h2 className='mt-16 mb-3 text-3xl font-bold text-slate-800'>Grayscale</h2>
      <p className='mb-8 text-base text-gray-500'>
        브랜드의 주요 UI와 텍스트를 구성하는 Gray 색상입니다.
      </p>

      <SwatchScale label='Bluegray' swatches={BLUEGRAY} />

      <div className='mb-8'>
        <p className='mb-2 text-sm font-bold text-slate-700'>common</p>
        <div className='grid grid-cols-2 overflow-hidden rounded-lg ring-1 ring-black/5 ring-inset'>
          <ColorChip
            copyValue='#FFFFFF'
            className='h-16'
            style={{ background: '#ffffff', color: '#212832' }}
          />
          <ColorChip
            copyValue='#000000'
            className='h-16'
            style={{ background: '#000000', color: '#ffffff' }}
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
                style={{ background: `rgba(17, 22, 31, ${o.value})` }}
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
