'use client';

import { createContext, useContext } from 'react';
import { tokens, type Tokens } from '@/tokens';

const ThemeContext = createContext<Tokens>(tokens);

/**
 * 하위 컴포넌트가 `useTheme()` 로 토큰 값을 받아 쓸 수 있게 합니다.
 * 기본값은 `tokens`. 런타임에 다른 테마를 쓰려면 `theme` 를 넘기세요.
 * (그 경우 CSS 변수도 함께 바꾸려면 layout 의 <style> 주입도 교체해야 합니다.)
 */
export function ThemeProvider({
  theme = tokens,
  children,
}: {
  theme?: Tokens;
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
