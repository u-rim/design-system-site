import {
  Button,
  type ButtonSize,
  type ButtonVariant,
} from '@/components/ui/Button';
import {
  AddIcon,
  ArrowForeIcon,
  DownloadIcon,
  MoreVerticIcon,
  SearchIcon,
  SettingIcon,
} from '@/components/icons';
import { Callout } from '@/components/Callout';

const VARIANTS: { value: ButtonVariant; label: string; usage: string }[] = [
  {
    value: 'primary',
    label: 'Primary',
    usage: '화면에서 가장 중요한 단일 액션',
  },
  {
    value: 'secondary',
    label: 'Secondary',
    usage: '보조 액션, primary와 병렬',
  },
  { value: 'ghost', label: 'Ghost', usage: '낮은 강조, 취소·더보기 등' },
  { value: 'danger', label: 'Danger', usage: '삭제 혹은 확인이 필요한 액션' },
];

const SIZES: { value: ButtonSize; label: string; usage: string }[] = [
  { value: 'sm', label: 'sm', usage: '조밀한 툴바, 인라인' },
  { value: 'md', label: 'md', usage: '기본값' },
  { value: 'lg', label: 'lg', usage: '히어로 CTA, 모바일 풀폭' },
];

const PROPS: { name: string; type: string; def: string; desc: string }[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'ghost' | 'danger'",
    def: "'primary'",
    desc: '시각적 강조 단계',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    def: "'md'",
    desc: '높이와 좌우 패딩',
  },
  {
    name: 'iconOnly',
    type: 'boolean',
    def: 'false',
    desc: '아이콘만 있는 정사각형 버튼 (aria-label 필수)',
  },
  {
    name: 'disabled',
    type: 'boolean',
    def: 'false',
    desc: '비활성 (opacity 40%, 클릭 불가)',
  },
  {
    name: '...props',
    type: 'ButtonHTMLAttributes',
    def: '-',
    desc: 'onClick, aria-* 등 기본 button 속성 전달',
  },
];

const SNIPPET = `import { Button } from "@/components/ui/Button";
import { DownloadIcon, SearchIcon } from "@/components/icons";

<Button variant="primary" size="md" onClick={submit}>
  저장
</Button>

<Button variant="secondary">
  <DownloadIcon /> 다운로드
</Button>

<Button iconOnly aria-label="검색">
  <SearchIcon />
</Button>`;

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 rounded-xl bg-[#f8f9fa] p-8'>
      {children}
    </div>
  );
}

function SectionHeading({
  children,
  className = 'mt-14',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`${className} mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800`}
    >
      <span className='text-gray-400'>&bull;</span> {children}
    </h2>
  );
}

export default function ButtonPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Button</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Button은 사용자가 액션을 실행하는 기본 인터랙션 요소입니다.
        <br />
        색상·간격·모서리는 모두 디자인 토큰을 참조하므로 토큰이 바뀌면 함께
        갱신됩니다.
      </p>

      <Callout className='mt-8'>
        <li>한 화면에 Primary 버튼은 하나만 배치해요.</li>
        <li>버튼 라벨은 동사로, 2~4자 내외로 명확하게 작성해요.</li>
      </Callout>

      <hr className='my-12 border-gray-200' />

      <SectionHeading className='mt-0'>Variants</SectionHeading>
      <Panel>
        {VARIANTS.map((v) => (
          <Button key={v.value} variant={v.value}>
            {v.label}
          </Button>
        ))}
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        {VARIANTS.map((v) => (
          <li key={v.value}>
            <strong className='font-bold'>{v.label}</strong> : {v.usage}
          </li>
        ))}
      </ul>

      <SectionHeading>Sizes</SectionHeading>
      <Panel>
        {SIZES.map((s) => (
          <Button key={s.value} size={s.value}>
            Button {s.label}
          </Button>
        ))}
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        {SIZES.map((s) => (
          <li key={s.value}>
            <strong className='font-bold'>{s.label}</strong> : {s.usage}
          </li>
        ))}
      </ul>

      <SectionHeading>With icon</SectionHeading>
      <Panel>
        <Button>
          <DownloadIcon /> 다운로드
        </Button>
        <Button variant='secondary'>
          <AddIcon /> 추가
        </Button>
        <Button variant='ghost'>
          더보기 <ArrowForeIcon />
        </Button>
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          아이콘은 <code>children</code> 에 <code>&lt;svg&gt;</code> 로 넣으면
          글자 크기에 맞춰(1.25em) 자동으로 정렬·스케일돼요.
        </li>
        <li>텍스트 앞/뒤 위치는 넣는 순서로 결정돼요.</li>
      </ul>

      <SectionHeading>Icon only</SectionHeading>
      <Panel>
        <Button iconOnly aria-label='검색'>
          <SearchIcon />
        </Button>
        <Button iconOnly variant='secondary' aria-label='설정'>
          <SettingIcon />
        </Button>
        <Button iconOnly variant='ghost' aria-label='더보기'>
          <MoreVerticIcon />
        </Button>
        <Button iconOnly variant='danger' aria-label='검색'>
          <SearchIcon />
        </Button>
        <Button iconOnly size='sm' aria-label='검색'>
          <SearchIcon />
        </Button>
        <Button iconOnly size='lg' aria-label='검색'>
          <SearchIcon />
        </Button>
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          <code>iconOnly</code> 는 정사각형 버튼이에요 (sm 32 / md 40 / lg
          48px).
        </li>
        <li>
          스크린리더를 위해 <code>aria-label</code> 을 반드시 함께 전달해요.
        </li>
      </ul>

      <SectionHeading>States</SectionHeading>
      <Panel>
        <Button>Default</Button>
        <Button className='bg-[var(--color-blue-7)]'>Hover</Button>
        <Button disabled>Disabled</Button>
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          Hover / active 는 각 variant의 한 단계 진한 토큰(blue-7 / blue-8)을
          사용해요.
        </li>
        <li>Disabled 는 opacity 40% + 클릭 불가 상태예요.</li>
      </ul>

      <SectionHeading>Props</SectionHeading>
      <div className='overflow-x-auto'>
        <table className='w-full min-w-[560px] border-collapse text-base'>
          <thead>
            <tr className='border-b border-gray-200 text-left text-gray-500'>
              <th className='py-3 pr-4 font-semibold'>Prop</th>
              <th className='py-3 pr-4 font-semibold'>Type</th>
              <th className='py-3 pr-4 font-semibold'>Default</th>
              <th className='py-3 font-semibold'>Description</th>
            </tr>
          </thead>
          <tbody>
            {PROPS.map((p) => (
              <tr key={p.name} className='border-b border-gray-100'>
                <td className='py-3 pr-4 font-semibold text-gray-700'>
                  {p.name}
                </td>
                <td className='py-3 pr-4 text-sm text-gray-500'>{p.type}</td>
                <td className='py-3 pr-4 text-sm text-gray-500'>{p.def}</td>
                <td className='py-3 text-gray-500'>{p.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading>Usage</SectionHeading>
      <pre className='overflow-x-auto rounded-lg bg-[var(--color-bluegray-10)] p-5 text-sm text-[var(--color-bluegray-2)]'>
        <code>{SNIPPET}</code>
      </pre>
    </div>
  );
}
