import Image from 'next/image';

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

        <div className='mt-6 rounded-xl bg-white px-8 py-14 text-center'>
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

        <div className='mt-5 rounded-lg border border-gray-200 bg-white px-5 py-4'>
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
            참고사항
          </p>
          <ul className='mt-2 list-disc pl-8 text-sm text-gray-500'>
            <li>
              지나치게 얇은 두께 (light,thin)는 배경과의 구분이 어렵고, 지나치게
              두꺼운 두께 (extra bold)는 시각적 피로를 유발할 수 있습니다.
            </li>
          </ul>
        </div>

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

        <div className='rounded-xl bg-[var(--color-surface)] px-8 py-12'>
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
          <div className='mx-auto flex max-w-xl flex-col items-end gap-5'>
            {TYPE_SCALE.map((row) => (
              <div
                key={row.n}
                className='flex w-full items-center justify-end gap-3'
              >
                <span className={`text-slate-600 ${row.cls}`}>{row.text}</span>
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
      </section>
    </div>
  );
}
