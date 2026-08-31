import { Input, type InputSize } from '@/components/ui/Input';
import {
  ClearIcon,
  EyeOffIcon,
  EyeOnIcon,
  LockIcon,
  SearchIcon,
} from '@/components/icons';
import { Callout } from '@/components/Callout';

const SIZES: { value: InputSize; label: string; usage: string }[] = [
  { value: 'sm', label: 'sm', usage: '조밀한 툴바, 인라인 필터' },
  { value: 'md', label: 'md', usage: '기본값' },
  { value: 'lg', label: 'lg', usage: '로그인 등 단독 폼, 모바일' },
];

const PROPS: { name: string; type: string; def: string; desc: string }[] = [
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    def: "'md'",
    desc: '높이와 좌우 패딩',
  },
  {
    name: 'invalid',
    type: 'boolean',
    def: 'false',
    desc: '오류 상태 (border·ring 을 red 토큰으로 전환)',
  },
  {
    name: 'leadingIcon',
    type: 'ReactNode',
    def: '-',
    desc: '앞쪽 아이콘 슬롯 (예: 돋보기)',
  },
  {
    name: 'trailingIcon',
    type: 'ReactNode',
    def: '-',
    desc: '뒤쪽 아이콘 슬롯 (예: 지우기·비밀번호 토글)',
  },
  {
    name: 'disabled',
    type: 'boolean',
    def: 'false',
    desc: '비활성 (opacity 50%, 입력 불가)',
  },
  {
    name: '...props',
    type: 'InputHTMLAttributes',
    def: '-',
    desc: 'value, placeholder, onChange, type, aria-* 등 기본 input 속성 전달',
  },
];

const SNIPPET = `import { Input } from "@/components/ui/Input";
import { SearchIcon, ClearIcon } from "@/components/icons";

<Input placeholder="이름을 입력하세요" />

<Input
  size="lg"
  leadingIcon={<SearchIcon />}
  trailingIcon={<ClearIcon />}
  placeholder="검색어"
/>

<label className="flex flex-col gap-1.5">
  <span className="text-sm font-medium">이메일</span>
  <Input type="email" invalid placeholder="you@example.com" />
  <span className="text-sm text-[var(--color-red-6)]">
    올바른 이메일 형식이 아니에요.
  </span>
</label>`;

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-stretch gap-4 rounded-xl bg-[#f8f9fa] p-8'>
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

export default function InputPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Input</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Input은 사용자가 짧은 텍스트를 입력하는 기본 폼 요소입니다.
        <br />
        높이·간격·모서리·색상은 모두 디자인 토큰을 참조하므로 토큰이 바뀌면 함께
        갱신됩니다.
      </p>

      <Callout className='mt-8'>
        <li>레이블은 항상 함께 배치하고, placeholder로 레이블을 대신하지 않아요.</li>
        <li>오류 메시지는 필드 바로 아래에 두고 무엇을 고쳐야 하는지 알려줘요.</li>
      </Callout>

      <hr className='my-12 border-gray-200' />

      <SectionHeading className='mt-0'>Sizes</SectionHeading>
      <Panel>
        {SIZES.map((s) => (
          <Input key={s.value} size={s.value} placeholder={`Input ${s.label}`} />
        ))}
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        {SIZES.map((s) => (
          <li key={s.value}>
            <strong className='font-bold'>{s.label}</strong> : {s.usage}
          </li>
        ))}
      </ul>

      <SectionHeading>States</SectionHeading>
      <Panel>
        <Input placeholder='Default' />
        <Input
          className='border-[var(--color-blue-6)] ring-2 ring-[var(--color-blue-6)]/30'
          defaultValue='입력 중…'
        />
        <Input invalid defaultValue='잘못된 값' />
        <Input disabled placeholder='Disabled' />
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>Focus는 blue-6 테두리 + 반투명 ring으로 표시해요.</li>
        <li>
          오류는 <code>invalid</code> 로 켜고, red-6 테두리와 함께 아래에 안내
          문구를 함께 보여줘요.
        </li>
        <li>Disabled는 opacity 50% + 입력 불가 상태예요.</li>
      </ul>

      <SectionHeading>With icon</SectionHeading>
      <Panel>
        <Input leadingIcon={<SearchIcon />} placeholder='검색어' />
        <Input
          leadingIcon={<SearchIcon />}
          trailingIcon={<ClearIcon />}
          defaultValue='디자인 토큰'
        />
        <Input
          type='password'
          leadingIcon={<LockIcon />}
          trailingIcon={<EyeOnIcon />}
          defaultValue='supersecret'
        />
        <Input
          type='password'
          leadingIcon={<LockIcon />}
          trailingIcon={<EyeOffIcon />}
          defaultValue='supersecret'
        />
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          아이콘은 <code>leadingIcon</code> / <code>trailingIcon</code> 슬롯에
          <code>&lt;svg&gt;</code> 로 넣으면 글자 크기에 맞춰(1.25em) 자동으로
          정렬·스케일돼요.
        </li>
        <li>
          아이콘 색은 <code>bluegray-5</code> 토큰으로 통일하고, 값이 채워지면
          뒤쪽에 지우기 아이콘을 노출해요.
        </li>
      </ul>

      <SectionHeading>Field</SectionHeading>
      <Panel>
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-gray-700'>이메일</span>
          <Input type='email' placeholder='you@example.com' />
          <span className='text-sm text-gray-400'>
            로그인에 사용할 주소를 입력해요.
          </span>
        </label>
        <label className='flex flex-col gap-1.5'>
          <span className='text-sm font-medium text-gray-700'>이메일</span>
          <Input type='email' invalid defaultValue='you@@example' />
          <span className='text-sm text-[var(--color-red-6)]'>
            올바른 이메일 형식이 아니에요.
          </span>
        </label>
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          레이블 · 입력 필드 · 보조 문구를 <code>&lt;label&gt;</code> 로 묶어
          클릭 영역과 스크린리더 연결을 확보해요.
        </li>
        <li>
          보조 문구 자리에 도움말과 오류 메시지를 같은 위치에서 교체해 레이아웃이
          흔들리지 않게 해요.
        </li>
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
