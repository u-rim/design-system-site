'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  {
    group: 'Intro',
    items: [{ label: 'Overview', href: '/' }],
  },
  {
    group: 'Token',
    items: [
      { label: 'Color', href: '/colors' },
      { label: 'Typography', href: '/typography' },
      { label: 'Icon', href: '/icons' },
      { label: 'Spacing', href: '/spacing' },
      { label: 'Radius', href: '/radius' },
      { label: 'Elevation', href: '/elevation' },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Button', href: '/components/button' },
      { label: 'Input', href: '/components/input' },
      { label: 'Checkbox', href: '/components/checkbox' },
      { label: 'Radio', href: '/components/radio' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r border-[var(--color-border)] bg-white px-5 py-8'>
      <Link
        href='/'
        className='mb-8 block text-3xl font-semibold tracking-tight'
      >
        Design<br></br> system
      </Link>
      <nav className='flex flex-col gap-6'>
        {NAV.map((section) => (
          <div key={section.group}>
            <p className='mb-2 px-2 text-lg font-semibold text-gray-400'>
              {section.group}
            </p>
            <div className='flex flex-col gap-0.5'>
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-2 py-1.5 text-m transition-colors ${
                      active
                        ? 'bg-[var(--color-brand-5)]/10 font-medium text-[var(--color-brand-5)]'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
