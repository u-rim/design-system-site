import { Radio } from '@/components/ui/Radio';
import { Callout } from '@/components/Callout';

const PROPS: { name: string; type: string; def: string; desc: string }[] = [
  {
    name: 'label',
    type: 'ReactNode',
    def: '-',
    desc: '라디오 오른쪽 레이블',
  },
  {
    name: 'description',
    type: 'ReactNode',
    def: '-',
    desc: '레이블 아래 보조 설명',
  },
  {
    name: 'name',
    type: 'string',
    def: '-',
    desc: '같은 값을 가진 Radio 끼리 한 그룹으로 묶여 하나만 선택',
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
    desc: 'value, onChange, aria-* 등 기본 input 속성 전달',
  },
];

const SNIPPET = `import { Radio } from "@/components/ui/Radio";

<fieldset className="flex flex-col gap-3">
  <legend className="mb-1 text-sm font-medium">결제 수단</legend>

  <Radio name="pay" value="card" label="신용/체크카드" defaultChecked />
  <Radio name="pay" value="bank" label="계좌이체" />
  <Radio
    name="pay"
    value="phone"
    label="휴대폰 결제"
    description="월 결제 한도 내에서만 사용할 수 있어요."
  />
  <Radio name="pay" value="point" label="포인트" disabled />
</fieldset>`;

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

export default function RadioPage() {
  return (
    <div>
      <h1 className='mb-4 text-5xl font-bold tracking-tight'>Radio</h1>
      <p className='text-base leading-relaxed text-gray-500'>
        Radio는 서로 배타적인 선택지 중 하나만 고르는 선택 요소입니다.
        <br />
        원·선택 색은 모두 디자인 토큰을 참조하므로 토큰이 바뀌면 함께 갱신됩니다.
      </p>

      <Callout className='mt-8'>
        <li>선택지가 2~5개로 한눈에 보일 때 사용하고, 그보다 많으면 Select를 써요.</li>
        <li>같은 <code>name</code>으로 묶고 기본값 하나를 미리 선택해 둬요.</li>
      </Callout>

      <hr className='my-12 border-gray-200' />

      <SectionHeading className='mt-0'>States</SectionHeading>
      <Panel>
        <Radio name='state' label='Unselected' />
        <Radio name='state' label='Selected' defaultChecked />
        <Radio name='state-d' label='Disabled' disabled />
        <Radio name='state-d2' label='Disabled selected' disabled defaultChecked />
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>선택 시 테두리는 blue-6, 가운데 점도 blue-6로 채워요.</li>
        <li>한 번 선택하면 다른 항목을 눌러야 해제돼요 (스스로 해제 불가).</li>
        <li>Disabled는 opacity 50% + 클릭 불가 상태예요.</li>
      </ul>

      <SectionHeading>Group</SectionHeading>
      <Panel>
        <fieldset className='flex flex-col gap-3'>
          <legend className='mb-1 text-sm font-medium text-gray-700'>
            결제 수단
          </legend>
          <Radio name='pay' value='card' label='신용/체크카드' defaultChecked />
          <Radio name='pay' value='bank' label='계좌이체' />
          <Radio name='pay' value='phone' label='휴대폰 결제' />
          <Radio name='pay' value='point' label='포인트' disabled />
        </fieldset>
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code>으로 묶어
          그룹의 의미를 전달해요.
        </li>
        <li>세로로 쌓고 간격은 spacing 토큰으로 통일해요.</li>
      </ul>

      <SectionHeading>With description</SectionHeading>
      <Panel>
        <Radio
          name='plan'
          label='무료'
          description='개인 프로젝트에 적합해요. 월 1,000회 호출까지 무료예요.'
          defaultChecked
        />
        <Radio
          name='plan'
          label='프로'
          description='팀 협업과 무제한 호출이 필요할 때 선택해요.'
        />
      </Panel>
      <ul className='mt-6 list-disc space-y-2 pl-6 text-base text-gray-700'>
        <li>
          선택지마다 차이를 설명해야 하면 <code>description</code>에 짧게 적어요.
        </li>
        <li>설명 문구는 gray-400으로 낮춰 레이블과 위계를 나눠요.</li>
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
