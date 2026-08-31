/**
 * Design token single source of truth.
 *
 * - 문서 페이지(`/colors`, `/spacing`, `/radius`, `/elevation` …)는 이 값을 import 해서 렌더합니다.
 * - `tokensToCssText()` 로 CSS 변수(`--color-*`, `--spacing-*` …)를 만들어
 *   `src/app/layout.tsx` 에서 `:root` 에 주입합니다. → CSS 와 JS 가 항상 동기화됩니다.
 * - 런타임에 값을 바꾸려면 `theme` 객체만 교체해 `<ThemeProvider theme={...}>` 로 내려주면 됩니다.
 */

export const tokens = {
  color: {
    bluegray: {
      1: '#F8F9FA',
      2: '#DDE3E9',
      3: '#C4CCD4',
      4: '#929EAA',
      5: '#697787',
      6: '#4F5C6A',
      7: '#3C4551',
      8: '#2C343F',
      9: '#212832',
      10: '#11161F',
    },
    blue: {
      1: '#EBEEFF',
      2: '#E0E3FF',
      3: '#CCD1FE',
      4: '#B1B8FF',
      5: '#9195DE',
      6: '#7167D0', // main
      7: '#5C3FD0',
      8: '#4522D2',
      9: '#2606A6',
      10: '#160461',
    },
    red: {
      1: '#FFECEB',
      2: '#FFD5D2',
      3: '#FFC2BE',
      4: '#FF9189',
      5: '#F66C62',
      6: '#EB5A4F',
      7: '#CE453B',
      8: '#AE2E24',
      9: '#5D1F1A',
      10: '#42221F',
    },
    green: {
      1: '#EBF7EF',
      2: '#D7EFDE',
      3: '#AFDFBE',
      4: '#87CF9D',
      5: '#5FBF7C',
      6: '#519C68',
      7: '#468259',
      8: '#30603E',
      9: '#24482E',
      10: '#18301F',
    },
    white: '#FFFFFF',
    black: '#000000',
    whitePerm: '#FFFFFF',
    blackPerm: '#181C1F',
    brand: '#9966FF', // --color-brand-5
  },

  /** black 위 불투명도 스텝 (rgba alpha) */
  opacity: {
    10: 0.1,
    20: 0.2,
    40: 0.4,
    60: 0.6,
    80: 0.8,
  },

  /** px. iOS pt / Android dp 와 1:1 매핑 */
  spacing: {
    0: 0,
    1: 2,
    2: 4,
    3: 8,
    4: 12,
    5: 16,
    6: 20,
    7: 24,
    8: 32,
    9: 40,
    10: 48,
    11: 64,
    12: 80,
  },

  /** px (`full` = 원형) */
  radius: {
    0: 0,
    1: 2,
    2: 4,
    3: 8,
    4: 12,
    5: 16,
    6: 24,
    full: 9999,
  },

  /** box-shadow */
  elevation: {
    1: '0 1px 2px rgba(20, 24, 31, 0.06), 0 1px 3px rgba(20, 24, 31, 0.08)',
    2: '0 2px 4px rgba(20, 24, 31, 0.06), 0 4px 8px rgba(20, 24, 31, 0.08)',
    3: '0 4px 8px rgba(20, 24, 31, 0.06), 0 8px 16px rgba(20, 24, 31, 0.10)',
    4: '0 8px 16px rgba(20, 24, 31, 0.08), 0 16px 32px rgba(20, 24, 31, 0.12)',
    5: '0 12px 24px rgba(20, 24, 31, 0.10), 0 24px 48px rgba(20, 24, 31, 0.16)',
  },

  /** 시맨틱 별칭 */
  semantic: {
    surface: '#FFFFFF',
    ink: '#11161F',
    border: '#E9ECEF',
  },

  font: {
    family: {
      // globals.css @theme 와 값 동기화 (아래 tokensToCssText 가 --font-sans/--font-mono 도 emit)
      // 모든 텍스트를 Pretendard로 통일 — mono 는 sans 와 동일
      sans: "'Pretendard Variable', 'Pretendard', ui-sans-serif, system-ui, sans-serif",
      mono: "'Pretendard Variable', 'Pretendard', ui-sans-serif, system-ui, sans-serif",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    /** size: px, line: px | '130%', tracking: 폰트 크기 대비 % */
    scale: {
      'display-xlarge': { size: 110, line: '130%', tracking: '0%' },
      'display-large': { size: 80, line: '130%', tracking: '0%' },
      'display-medium': { size: 64, line: '130%', tracking: '0%' },
      'display-small': { size: 48, line: '130%', tracking: '0%' },
      'heading-xlarge': { size: 48, line: 82, tracking: '-0.4%' },
      'heading-large': { size: 40, line: 70, tracking: '-0.4%' },
      'heading-medium': { size: 32, line: 56, tracking: '-0.2%' },
      'heading-small': { size: 24, line: 42, tracking: '-0.2%' },
      'body-1': { size: 16, line: 28, tracking: '-0.2%' },
      'body-2': { size: 15, line: 26, tracking: '-0.2%' },
      'body-3': { size: 14, line: 25, tracking: '-0.2%' },
      'label-1': { size: 17, line: 30, tracking: '-0.2%' },
      'label-2': { size: 15, line: 26, tracking: '-0.2%' },
      caption: { size: 12, line: 21, tracking: '-0.2%' },
    },
  },
} as const;

export type Tokens = typeof tokens;

/** `{1:'#F8F9FA', …}` → `[{ step:'1', value:'#F8F9FA' }, …]` (문서 렌더용 헬퍼) */
export function scaleEntries<T>(obj: Record<string | number, T>) {
  return Object.entries(obj).map(([step, value]) => ({ step, value }));
}

/**
 * tokens → `:root { --… }` CSS 텍스트.
 * layout 에서 <style> 로 주입해 CSS 변수와 JS 값을 한 소스에서 유지합니다.
 */
export function tokensToCssText(t: Tokens = tokens): string {
  const lines: string[] = [];
  const push = (name: string, value: string | number) =>
    lines.push(`  --${name}: ${value};`);

  for (const family of ['bluegray', 'blue', 'red', 'green'] as const) {
    for (const [step, hex] of Object.entries(t.color[family])) {
      push(`color-${family}-${step}`, hex);
    }
  }
  push('color-white', t.color.white);
  push('color-black', t.color.black);
  push('color-white-perm', t.color.whitePerm);
  push('color-black-perm', t.color.blackPerm);
  push('color-brand-5', t.color.brand);

  push('color-surface', t.semantic.surface);
  push('color-ink', t.semantic.ink);
  push('color-border', t.semantic.border);

  for (const [step, alpha] of Object.entries(t.opacity)) {
    push(`opacity-${step}`, alpha);
  }
  for (const [step, px] of Object.entries(t.spacing)) {
    push(`spacing-${step}`, `${px}px`);
  }
  for (const [step, px] of Object.entries(t.radius)) {
    push(`radius-${step}`, `${px}px`);
  }
  for (const [step, shadow] of Object.entries(t.elevation)) {
    push(`elevation-${step}`, shadow);
  }

  push('font-sans', t.font.family.sans);
  push('font-mono', t.font.family.mono);
  for (const [name, weight] of Object.entries(t.font.weight)) {
    push(`font-weight-${name}`, weight);
  }

  return `:root {\n${lines.join('\n')}\n}`;
}
