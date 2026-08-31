import { Checkbox } from '@/components/ui/Checkbox';
import { Callout } from '@/components/Callout';

const PROPS: { name: string; type: string; def: string; desc: string }[] = [
  {
    name: 'label',
    type: 'ReactNode',
    def: '-',
    desc: '체크박스 오른쪽 레이블',
  },
  {
    name: 'description',
    type: 'ReactNode',
    def: '-',
    desc: '레이블 아래 보조 설명',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    def: 'false',
    desc: '부분 선택 상태 ("전체 선택" 부모 등)',
  },
  {
    name: 'checked / defaultChecked',
    type: 'boolean',
    def: '-',
    desc: '선택 여부 (제어 / 비제어)',
  },
  {
    name: 'disabled',
    type: 'boolean',
    def: 'false',
    desc: '비활성 (opacity 50%, 클릭 불가)',
  },
  {
    name: '...props',
    type: 'InputHTMLAttributes',
    def: '-',
    desc: 'name, value, onChange, aria-* 등 기본 input 속성 전달',
  },
];

const SNIPPET = `import { Checkbox } from "@/components/ui/Checkbox";

<Checkbox label="이용약관에 동의합니다" />

<Checkbox
  label="마케팅 정보 수신"
  description="이벤트와 혜택 소식을 이메일로 보내드려요."
  defaultChecked
/>

<Checkbox label="전체 선택" indeterminate />

<Checkbox label="비활성" disabled />`;

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-start gap-4 rounded-xl bg-[#f8f9fa] p-8'>
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

export default function CheckboxPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Checkbox</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Checkbox는 서로 독립적인 여러 항목을 켜고 끄는 선택 요소입니다.
        <br />
        박스·모서리·선택 색은 모두 디자인 토큰을 참조하므로 토큰이 바뀌면 함께
        갱신됩니다.
      </p>

      <Callout className='mt-8'>
        <li>항목들이 서로 독립적으로 선택될 때 사용하고, 하나만 골라야 하면 Radio를 써요.</li>
        <li>레이블 전체가 클릭 영역이 되도록 <code>&lt;label&gt;</code>로 감싸요.</li>
      </Callout>

      <hr className='my-12 border-gray-200' />

      <SectionHeading className='mt-0'>States</SectionHeading>
      <Panel>
        <Checkbox label='Unchecked' />
        <Checkbox label='Checked' defaultChecked />
        <Checkbox label='Indeterminate' indeterminate />
        <Checkbox label='Disabled' disabled />
        <Checkbox label='Disabled checked' disabled defaultChecked />
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>선택 시 박스는 blue-6로 채우고 흰색 체크를 보여줘요.</li>
        <li>
          <code>indeterminate</code>는 하위 항목이 일부만 선택된 "전체 선택"
          부모에만 써요.
        </li>
        <li>Disabled는 opacity 50% + 클릭 불가 상태예요.</li>
      </ul>

      <SectionHeading>With description</SectionHeading>
      <Panel>
        <Checkbox
          label='마케팅 정보 수신 (선택)'
          description='이벤트와 혜택 소식을 이메일로 보내드려요. 언제든 해지할 수 있어요.'
        />
        <Checkbox
          label='필수 약관에 동의합니다'
          description='서비스 이용약관과 개인정보 처리방침을 확인했어요.'
          defaultChecked
        />
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          부연 설명이 필요하면 <code>description</code>에 넣고, 레이블은 짧게
          유지해요.
        </li>
        <li>설명 문구는 gray-400으로 낮춰 레이블과 위계를 나눠요.</li>
      </ul>

      <SectionHeading>Group</SectionHeading>
      <Panel>
        <Checkbox label='전체 선택' indeterminate />
        <div className='ml-6 flex flex-col gap-3'>
          <Checkbox label='디자인 토큰' defaultChecked />
          <Checkbox label='컴포넌트' defaultChecked />
          <Checkbox label='가이드라인' />
        </div>
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>여러 개를 세로로 쌓고 간격은 spacing 토큰으로 통일해요.</li>
        <li>
          "전체 선택"은 하위 항목이 모두 선택되면 checked, 일부만이면
          <code>indeterminate</code>로 표시해요.
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
