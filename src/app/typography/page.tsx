import { Callout } from '@/components/Callout';

const TYPE_SCALE = [
  { text: '타이틀 및 제목', cls: 'text-3xl font-bold', n: 1, label: 'Heading' },
  {
    text: '주요 콘텐츠 및 내용',
    cls: 'text-xl font-semibold',
    n: 2,
    label: 'body',
  },
  {
    text: '주요 콘텐츠 및 보조 콘텐츠를 세부적으로 설명',
    cls: 'text-sm',
    n: 3,
    label: 'caption',
  },
];

type FontWeightRow = {
  style: string;
  size: string;
  weight: string;
  lh: string;
  ls: string;
};

type FontWeightGroup = {
  category: string;
  usage: React.ReactNode;
  muted?: boolean;
  rows: FontWeightRow[];
};

const FONT_WEIGHT_GROUPS: FontWeightGroup[] = [
  {
    category: 'display',
    usage: (
      <>
        <strong className='font-bold'>배너와 마케팅</strong>
        <br />
        문서 작업에 사용
        <br />
        자유롭게 변형 가능
        <br />
        <br />
        (* 과도한 크기는 지양)
      </>
    ),
    rows: [
      { style: 'Xlarge', size: '110px', weight: 'bold 700', lh: '130%', ls: '0%' },
      { style: 'large', size: '80px', weight: 'bold 700', lh: '130%', ls: '0%' },
      { style: 'medium', size: '64px', weight: 'bold 700', lh: '130%', ls: '0%' },
      { style: 'small', size: '48px', weight: 'bold 700', lh: '130%', ls: '0%' },
    ],
  },
  {
    category: 'heading',
    usage: '페이지 단위의 타이틀',
    rows: [
      { style: 'Xlarge (h1)', size: '48px', weight: 'bold 700', lh: '82px', ls: '-0.4%' },
      {
        style: 'large (h2)',
        size: '40px',
        weight: 'bold 700 / regular 400',
        lh: '70px',
        ls: '-0.4%',
      },
      {
        style: 'medium (h3)',
        size: '32px',
        weight: 'bold 700 / regular 400',
        lh: '56px',
        ls: '-0.2%',
      },
      {
        style: 'small (h4)',
        size: '24px',
        weight: 'bold 700 / regular 400',
        lh: '42px',
        ls: '-0.2%',
      },
    ],
  },
  {
    category: 'body',
    usage: '본문과 기본 콘텐츠',
    rows: [
      {
        style: 'body-1',
        size: '16px',
        weight: 'bold 700, medium 500, regular 400',
        lh: '28px',
        ls: '-0.2%',
      },
      {
        style: 'body-2',
        size: '15px',
        weight: 'bold 700, medium 500, regular 400',
        lh: '26px',
        ls: '-0.2%',
      },
      {
        style: 'body-3',
        size: '14px',
        weight: 'bold 700, medium 500, regular 400',
        lh: '25px',
        ls: '-0.2%',
      },
    ],
  },
  {
    category: 'lable',
    usage: 'button,badge,chips…',
    rows: [
      {
        style: 'lable-1',
        size: '17px',
        weight: 'bold 700, medium 500, regular 400',
        lh: '30px',
        ls: '-0.2%',
      },
      {
        style: 'lable-2',
        size: '15px',
        weight: 'bold 700, medium 500, regular 400',
        lh: '26px',
        ls: '-0.2%',
      },
    ],
  },
  {
    category: 'caption',
    usage: '부가적인 설명',
    rows: [
      {
        style: 'caption',
        size: '12px',
        weight: 'bold 700, medium 500, regular 400',
        lh: '21px',
        ls: '-0.2%',
      },
    ],
  },
];

type WeightSample = {
  label: string;
  desc: string;
  size: number;
  lh: number;
  ls: number; // letter-spacing, 폰트 크기 대비 %
  kind: 'heading' | 'body';
  weights?: number[]; // heading 전용: 표시할 굵기 목록
  align?: 'left' | 'center'; // 스펙시먼 정렬 (기본 left)
  hideFirstLine?: boolean; // 첫 줄 '이 디자인 시스템은 하나의 값을' 숨김
};

const WEIGHT_SAMPLES: WeightSample[] = [
  {
    label: 'heading-XL (h1)',
    desc: '페이지 단위의 타이틀에서 사용하는 폰트입니다.',
    size: 48,
    lh: 82,
    ls: -0.4,
    kind: 'heading',
    weights: [700],
    align: 'center',
    hideFirstLine: true,
  },
  {
    label: 'heading-L (h2)',
    desc: '페이지 단위의 타이틀에서 사용하는 폰트입니다.',
    size: 40,
    lh: 70,
    ls: -0.4,
    kind: 'heading',
    weights: [700, 400],
    align: 'center',
    hideFirstLine: true,
  },
  {
    label: 'heading-M (h3)',
    desc: '페이지 단위의 타이틀에서 사용하는 폰트입니다.',
    size: 32,
    lh: 56,
    ls: -0.2,
    kind: 'heading',
    weights: [700, 400],
  },
  {
    label: 'heading-S (h4)',
    desc: '페이지 단위의 타이틀에서 사용하는 폰트입니다.',
    size: 24,
    lh: 42,
    ls: -0.2,
    kind: 'heading',
    weights: [700, 400],
  },
  {
    label: 'body-1',
    desc: '본문과 기본 콘텐츠에 적용됩니다. 3가지의 타입으로 중요도와 위계에 따라 설정합니다.',
    size: 16,
    lh: 28,
    ls: -0.2,
    kind: 'body',
  },
  {
    label: 'body-2',
    desc: '본문과 기본 콘텐츠에 적용됩니다. 3가지의 타입으로 중요도와 위계에 따라 설정합니다.',
    size: 15,
    lh: 26,
    ls: -0.2,
    kind: 'body',
  },
  {
    label: 'body-3',
    desc: '본문과 기본 콘텐츠에 적용됩니다. 3가지의 타입으로 중요도와 위계에 따라 설정합니다.',
    size: 14,
    lh: 25,
    ls: -0.2,
    kind: 'body',
  },
  {
    label: 'caption',
    desc: '부가적인 설명을 작성할때 사용되는 폰트입니다.',
    size: 12,
    lh: 21,
    ls: -0.2,
    kind: 'body',
  },
];

function weightLabel(w: number) {
  if (w >= 700) return 'Bold 700';
  if (w >= 500) return 'Medium 500';
  return 'Regular 400';
}

function WeightSpecimen({
  size,
  lh,
  ls,
  weight,
  align = 'left',
  hideFirstLine = false,
  className = '',
}: {
  size: number;
  lh: number;
  ls: number;
  weight: number;
  align?: 'left' | 'center';
  hideFirstLine?: boolean;
  className?: string;
}) {
  const color =
    weight >= 700
      ? 'text-slate-800'
      : weight >= 500
        ? 'text-slate-600'
        : 'text-slate-500';
  return (
    <div
      className={`overflow-hidden rounded-xl bg-[#f8f9fa] ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      <p
        className={color}
        style={{
          fontSize: `${size}px`,
          lineHeight: `${lh}px`,
          fontWeight: weight,
          letterSpacing: `${(size * ls) / 100}px`,
          wordBreak: 'keep-all',
        }}
      >
        {!hideFirstLine && (
          <span className='block'>이 디자인 시스템은 하나의 값을</span>
        )}
        <span className='block text-balance'>
          여러 플랫폼에서 함께 쓸 수 있도록 토큰 단위로 설계되었습니다.
        </span>
      </p>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div className='max-w-5xl'>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Typography</h1>
      <p className='text-base text-gray-500'>
        타이포그래피는 정보를 효과적으로 전달하고 일관된 사용자 경험을
        제공하는데에 필수적인 요소입니다.
      </p>

      <hr className='my-10 border-gray-200' />

      <section>
        <h2 className='mb-5 text-3xl font-bold text-slate-700'>서체</h2>
        <p className='text-base text-gray-600'>
          표준형 스타일은 국문과 영문 모두 Pretendard 서체를 기본으로
          사용합니다.
        </p>
        <p className='mt-1 text-base'>
          <a
            href='https://github.com/orioncactus/pretendard'
            target='_blank'
            rel='noreferrer'
            className='text-gray-600 underline underline-offset-4 hover:text-slate-900'
          >
            👉 프리텐다드 다운받기
          </a>
        </p>

        <div className='mt-6 rounded-xl bg-[#f8f9fa] px-8 py-14 text-center'>
          <p className='text-3xl font-bold text-slate-800'>
            Pretendard 프리텐다드 123 !@#%
          </p>
        </div>

        <h3 className='mt-14 mb-4 flex items-center gap-2 text-2xl font-bold text-slate-700'>
          <span className='text-gray-400'>&bull;</span> 글자 두께
        </h3>
        <p className='text-base text-gray-600'>
          표준형 스타일은 글자 간의 명확한 대비를 위해 regular(400)와
          medium(500), bold(700)으로 사용합니다.
        </p>

        <Callout className='mt-5'>
          <li>
            지나치게 얇은 두께 (light,thin)는 배경과의 구분이 어렵고, 지나치게
            두꺼운 두께 (extra bold)는 시각적 피로를 유발할 수 있어요.
          </li>
        </Callout>

        <hr className='my-6 border-gray-200' />

        <ul className='list-disc space-y-2 pl-6 text-base text-gray-700'>
          <li>
            <strong className='font-bold'>bold(700)</strong> : 강조가 필요한
            제목이나 중요한 내용에 사용해요.
          </li>
          <li>
            <strong className='font-bold'>medium(500)</strong> : 일반적인
            타이틀과 UI에서 사용해요.
          </li>
          <li>
            <strong className='font-bold'>regular(400)</strong> : 주로 본문에
            사용하여 기본 가독성을 보장해요.
          </li>
        </ul>

        <h3 className='mt-14 mb-4 flex items-center gap-2 text-2xl font-bold text-slate-700'>
          <span className='text-gray-400'>&bull;</span> Line height 줄 간격
        </h3>
        <p className='text-base text-gray-600'>
          줄 간격 (line-height)은 가독성과 접근성을 위해{' '}
          <strong className='font-bold text-slate-800'>
            &lsquo;폰트 사이즈 * 1.75&rsquo;
          </strong>{' '}
          으로 설정하여, 시각적 피로를 줄입니다.
        </p>

        <hr className='my-6 border-gray-200' />

        <div className='rounded-xl bg-[#f8f9fa] px-8 py-12'>
          <div className='flex items-center justify-center gap-4'>
            <div className='text-right text-[11px] leading-tight text-pink-400'>
              폰트 사이즈
              <br />
              24px
            </div>
            <div className='flex flex-col items-center gap-2'>
              <p className='rounded bg-pink-100/70 px-2 text-2xl text-slate-500 ring-1 ring-pink-300'>
                안녕하세요 저는
              </p>
              <p className='rounded bg-pink-100/70 px-2 text-2xl text-slate-400 ring-1 ring-pink-300'>
                코딩하는 코자이너
              </p>
            </div>
            <div className='text-left text-[11px] leading-tight text-pink-400'>
              행간
              <br />
              42px
            </div>
          </div>
        </div>

        <h3 className='mt-14 mb-4 flex items-center gap-2 text-2xl font-bold text-slate-700'>
          <span className='text-gray-400'>&bull;</span> Type scale 글자 스케일
        </h3>
        <p className='text-base text-gray-600'>
          글자 스케일은 정보 전달과 체계적인 글자 사용을 위해 계층에 맞는 글자
          크기를 정의합니다.
        </p>

        <hr className='my-6 border-gray-200' />

        <div className='rounded-xl bg-[var(--color-bluegray-1)] px-8 py-12'>
          <div className='mx-auto flex w-fit flex-col gap-5'>
            {TYPE_SCALE.map((row) => (
              <div key={row.n} className='flex items-center gap-3'>
                <span
                  className={`w-80 text-right whitespace-nowrap text-slate-600 ${row.cls}`}
                >
                  {row.text}
                </span>
                <span className='h-px w-12 flex-none border-t border-dashed border-gray-400' />
                <span className='flex size-6 flex-none items-center justify-center rounded-full bg-slate-500 text-xs font-bold text-white'>
                  {row.n}
                </span>
                <span className='w-16 flex-none text-sm text-gray-400'>
                  {row.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ul className='mt-8 list-disc space-y-2 pl-6 text-base text-gray-700'>
          <li>
            <strong className='font-bold'>Display</strong> : 화면에서 가장 큰
            텍스트로 주로 배너와 같은 마케팅 용도로 사용합니다.
          </li>
          <li>
            <strong className='font-bold'>Heading</strong> : 페이지 단위의
            타이틀과 모듈 단위의 역할을 강조하는데 사용하며 h1 ~ h4까지의 계층을
            설정합니다.
          </li>
          <li>
            <strong className='font-bold'>Body</strong> : 본문과 기본 콘텐츠에
            적용됩니다.
          </li>
          <li>
            <strong className='font-bold'>Lable</strong> : 컴포넌트 구성내
            button,chips,input등에 사용됩니다.
          </li>
          <li>
            <strong className='font-bold'>Caption</strong> : 부가적인 내용을
            나타낼 때 사용합니다.
          </li>
        </ul>

        <h2 className='mt-20 mb-4 text-4xl font-bold tracking-tight text-slate-800'>
          Font weight
        </h2>
        <p className='text-base text-gray-500'>
          타이포그래피는 정보를 효과적으로 전달하고 일관된 사용자 경험을
          제공하는데에 필수적인 요소입니다.
        </p>

        <hr className='my-8 border-gray-200' />

        <div className='overflow-x-auto'>
          <table className='w-full min-w-[560px] border-collapse text-center text-xs'>
            <thead>
              <tr className='bg-[var(--color-brand-5)]/10 text-slate-700'>
                <th colSpan={2} className='rounded-l-lg px-2 py-2.5 font-bold'>
                  style
                </th>
                <th className='px-2 py-2.5 font-bold'>size</th>
                <th className='px-2 py-2.5 font-bold'>font weight</th>
                <th className='px-2 py-2.5 font-bold'>line height</th>
                <th className='px-2 py-2.5 font-bold'>letter spacing</th>
                <th className='rounded-r-lg px-2 py-2.5 font-bold'>usage</th>
              </tr>
            </thead>
            <tbody>
              {FONT_WEIGHT_GROUPS.flatMap((group) =>
                group.rows.map((row, i) => (
                  <tr
                    key={`${group.category}-${row.style}`}
                    className={`border-b border-gray-200 ${
                      group.muted ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {i === 0 && (
                      <td
                        rowSpan={group.rows.length}
                        className='px-2 py-3 text-left align-middle font-bold'
                      >
                        {group.category}
                      </td>
                    )}
                    <td className='px-2 py-3 align-middle whitespace-nowrap'>
                      {row.style}
                    </td>
                    <td className='px-2 py-3 align-middle whitespace-nowrap'>
                      {row.size}
                    </td>
                    <td className='px-2 py-3 align-middle'>{row.weight}</td>
                    <td className='px-2 py-3 align-middle whitespace-nowrap'>
                      {row.lh}
                    </td>
                    <td className='px-2 py-3 align-middle whitespace-nowrap'>
                      {row.ls}
                    </td>
                    {i === 0 && (
                      <td
                        rowSpan={group.rows.length}
                        className='px-2 py-3 align-middle font-medium'
                      >
                        {group.usage}
                      </td>
                    )}
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>

        <h2 className='mt-20 mb-4 text-4xl font-bold tracking-tight text-slate-800'>
          Font weight sample
        </h2>
        <p className='text-base text-gray-500'>
          타이포그래피는 정보를 효과적으로 전달하고 일관된 사용자 경험을
          제공하는데에 필수적인 요소입니다.
        </p>

        <hr className='my-8 border-gray-200' />

        {WEIGHT_SAMPLES.map((s) => (
          <div key={s.label} className='mb-14'>
            <h3 className='mb-2 flex items-center gap-2 text-lg font-bold text-slate-800'>
              <span className='text-gray-400'>&bull;</span> {s.label}
            </h3>
            <p className='text-sm text-gray-500'>{s.desc}</p>

            <hr className='my-5 border-gray-200' />

            {s.kind === 'heading' ? (
              (s.weights ?? [700]).map((w) => (
                <div key={w}>
                  <p className='mb-3 text-sm font-semibold text-slate-700'>
                    {weightLabel(w)}
                  </p>
                  <WeightSpecimen
                    size={s.size}
                    lh={s.lh}
                    ls={s.ls}
                    weight={w}
                    align={s.align}
                    hideFirstLine={s.hideFirstLine}
                    className='mb-8 px-8 py-10'
                  />
                </div>
              ))
            ) : (
              <>
                <div className='mb-6 grid grid-cols-2 gap-6'>
                  {[400, 500].map((w) => (
                    <div key={w}>
                      <p className='mb-3 text-sm font-semibold text-slate-700'>
                        {weightLabel(w)}
                      </p>
                      <WeightSpecimen
                        size={s.size}
                        lh={s.lh}
                        ls={s.ls}
                        weight={w}
                        className='px-6 py-8'
                      />
                    </div>
                  ))}
                </div>
                <p className='mb-3 text-sm font-semibold text-slate-700'>
                  Bold 700
                </p>
                <WeightSpecimen
                  size={s.size}
                  lh={s.lh}
                  ls={s.ls}
                  weight={700}
                  className='px-8 py-8'
                />
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
