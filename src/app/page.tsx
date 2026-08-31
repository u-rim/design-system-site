import { Callout } from '@/components/Callout';

export default function Home() {
  return (
    <div className='max-w-8xl'>
      <p className='mb-4 text-xl font-medium text-[var(--color-brand-5)]'>
        Design System
      </p>
      <h1 className='mb-4 text-4xl font-bold tracking-tight'>
        디자인 시스템 문서
      </h1>
      <p className='text-lg leading-relaxed text-gray-600'>
        컬러, 타이포그래피, 아이콘, 컴포넌트를 코드와 함께 확인하고 바로
        복사해서 사용할 수 있습니다. 왼쪽 메뉴에서 원하는 항목을 선택하세요.
      </p>

      <Callout className='mt-10'>
        <li>
          컴포넌트는 값을 직접 갖지 않고 토큰을 참조하는 방식으로 구성해요.
        </li>
        <li>
          하나의 토큰 값만 수정해도 이를 사용하는 모든 컴포넌트에 일관되게
          반영돼요.
        </li>
        <li>
          Spacing은 px 단위로 정의하고, iOS/Android에서는 pt/dp로 1:1 매핑돼요.
        </li>
      </Callout>

      <p className='mt-6 text-base leading-relaxed text-gray-600'>
        모든 디자인 토큰은 플랫폼에 종속되지 않는 원본 값을 기준으로 관리됩니다.
        컴포넌트는 색상이나 크기 값을 직접 가지지 않고, blue-6, spacing-2와 같은
        토큰을 참조해 스타일을 구성합니다. 덕분에 브랜드 컬러나 간격 기준이
        변경되어도 토큰 값만 수정하면 이를 사용하는 모든 컴포넌트에 자동으로
        반영되며, 동일한 토큰 체계를 CSS 변수, iOS, Android 등 각 플랫폼의 표현
        방식으로 확장할 수 있습니다.
      </p>
    </div>
  );
}
