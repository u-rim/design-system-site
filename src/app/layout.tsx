import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'fDS — Design System',
  description: '개발자를 위한 fDS 디자인 시스템 문서',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='ko' className='h-full antialiased'>
      <body className='flex min-h-full'>
        <Sidebar />
        <main className='min-h-screen flex-1 px-8 py-10 lg:px-16'>
          <div className='mx-auto max-w-6xl'>{children}</div>
        </main>
      </body>
    </html>
  );
}
