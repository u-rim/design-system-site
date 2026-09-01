# Design System

Figma에만 존재하던 디자인 시스템을, 개발자가 바로 쓸 수 있는 웹사이트(가이드 문서 + React 컴포넌트 코드)로 구축하는 프로젝트입니다.

## 프로젝트 개요

- **목표**: Figma에만 존재하던 디자인 시스템을, 개발자가 바로 쓸 수 있는 웹사이트(가이드 문서 + React 컴포넌트 코드)로 구축
- **기술 스택**: Next.js + Tailwind CSS
- **설계 원칙**: 아토믹 디자인 패턴 — 토큰(Token) → Atom(버튼, 인풋 등) → Molecule 순으로 확장

## 진행 과정

### 1. 아이콘 세트 (완료)

- Figma에서 아이콘 개별 SVG export
- 138개 아이콘 전체를 React 컴포넌트로 변환 완료
- `/icons` 페이지에서 검색 · 크기(16/20/24/32px) 선택 · 클릭 복사 지원

### 2. Typography 문서 페이지 (완료)

- 서체(Pretendard), 글자 두께(regular/medium/bold), line-height 기준 정리
- 레이아웃 이슈 발견 및 해결: 사이드바 옆 콘텐츠가 왼쪽으로 쏠려 보이는 문제
  - 원인: `main` 영역에 별도 max-width 제한이 없었음
  - 해결: `main` 내부에 `max-w-*` + `mx-auto` 컨테이너 추가해 가독성 있는 줄 길이 + 균형 잡힌 여백 확보
  - 참고 사례: Tailwind Docs, shadcn/ui, Radix UI 등 사이드바+콘텐츠 3단 레이아웃

### 3. 디자인 토큰 관리 구조 (완료)

- **기존 이슈**: 컬러/타이포 값이 여러 페이지에 흩어져 있어 값 하나 바꾸려면 여러 곳을 수정해야 함
- **결정 및 구현**:
  - `src/tokens.ts`를 단일 소스로 두고 각 문서 페이지가 이를 import 해서 렌더
  - **CSS 변수 동기화 채택** — `tokensToCssText()`가 `tokens.ts` → `:root { --color-*, --spacing-* … }` 를 생성하고 `layout.tsx`의 `<head>`에 주입. JS 값과 CSS 변수(`var(--color-blue-6)` 등)가 항상 동기화됨
  - `ThemeProvider` / `useTheme()` 로 props · context 형태 소비도 가능 (런타임 테마 교체 대비)
- 나중에 Style Dictionary 또는 Figma Tokens(JSON) 파이프라인으로 확장 가능하도록 설계

### 4. 컴포넌트 라이브러리 (진행 중)

- 토큰만 참조하는 예시 Atom 컴포넌트 + 문서 페이지: **Button · Input · Checkbox · Radio**
- 각 페이지는 동일 포맷 (Variants/Sizes/States · Props 표 · Usage 코드블록 · 참고사항 콜아웃)
- 공통 문서 요소는 `<Callout>` 컴포넌트로 통일

### 5. 디자인 토큰 → Figma 역이관 (진행 중)

- `tokens.ts` 값을 Figma MCP로 다시 Figma 변수 · 스타일로 생성 (Color/Opacity/Spacing/Radius/Typography 컬렉션 + elevation Effect Style + typography Text Style)
- 코드 ↔ 디자인 양방향 싱크 구조 확보 목적

## 실행 방법

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인합니다.

## 폴더 구조

```
src/
├── app/
│   ├── colors/ typography/ icons/ spacing/ radius/ elevation/   # 토큰 문서 페이지
│   ├── components/button/ input/ checkbox/ radio/               # 컴포넌트 문서 페이지
│   └── layout.tsx                                               # 토큰 CSS 변수 주입 + ThemeProvider
├── components/
│   ├── icons/          # 138개 아이콘 React 컴포넌트
│   ├── ui/             # Button, Input, Checkbox, Radio
│   ├── Callout.tsx     # 문서 공통 콜아웃
│   └── Sidebar.tsx
├── theme/
│   └── ThemeProvider.tsx
└── tokens.ts           # 디자인 토큰 단일 소스 (+ tokensToCssText)
```
