'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as Icons from '@/components/icons';

type IconComponent = (props: { className?: string }) => React.ReactElement;

const ICON_GROUPS: { title: string; icons: string[] }[] = [
  {
    title: 'Action',
    icons: [
      'heart_outlined',
      'heart',
      'comment_outlined',
      'comment',
      'chat_outlined',
      'mute_outlined',
      'image_outlined',
      'image',
      'certifi-mark_outlined',
      'certifi-mark',
      'notifications_outlined',
      'notifications',
      'notifications-off_outlined',
      'notifications-off',
      'info_outlined',
      'info',
      'alert_outlined',
      'alert',
      'check-circle_outlined',
      'check-circle',
      'help_outlined',
      'help',
      'qna_outlined',
      'qna',
      'warning_outlined',
      'warning',
      'clear-circle',
      'clear-circle_outline',
      'add-circle',
      'add-circle_outline',
      'smile_outlined',
      'sad_outlined',
      'voc_outlined',
      'voc',
      'send',
      'screen_share',
      'screen_setting',
      'screen_wide',
      'screen_narrow',
      'announce',
      'person',
      'new_window',
      'play-circle_outline',
      'play-circle',
      'vod-wait',
      'vod-inprogress',
      'vod_upload',
      'live_on',
      'play',
      'setting',
      'timer',
      'spinner',
      'star',
      'star-half',
      'search',
      'eye_on',
      'eye_off',
      'mic_on',
      'mic_off',
      'cam_on',
      'cam_off',
      'quit',
      'entrance',
      'learner_cert',
      'learner_uncert',
      'addreaction_outlined',
    ],
  },
  {
    title: 'Navigation',
    icons: [
      'clear',
      'chevron_left',
      'chevron_right',
      'chevron_up',
      'chevron_down',
      'check',
      'more_horiz',
      'more_vertic',
      'drop_down',
      'drop_up',
      'arrow_right',
      'menu',
      'drag_indicator',
      'arrow_sort',
      'arrow_up',
      'arrow_down',
      'arrow_back',
      'arrow_fore',
      'move_right',
      'move_left',
      'maintain',
    ],
  },
  {
    title: 'Contents',
    icons: [
      'add',
      'minus',
      'edit',
      'addimage',
      'file',
      'lock',
      'lock_outlined',
      'filter',
      'camera',
      'list',
      'random',
      'paper',
      'delete',
      'share-1',
      'community',
      'retry',
      'playlist',
      'download',
      'upload',
      'time',
      'calendar',
      'history',
      'change',
      'link',
      'thumbs_up',
      'thumbs_up_outlined',
      'thumbs_down',
      'thumbs_down_outlined',
      'goal',
      'goal_outlined',
      'confetti_outlined',
      'confetti',
      'copy',
      'job',
      'law',
      'home',
      'report_ourlined',
      'report',
      'image_gif',
      'pin_outlined',
      'pin',
      'hot_outlined',
      'hot',
      'academy',
      'teacher',
      'layout',
      'share',
      'quote_up',
      'quote_down',
      'key_outlined',
      'members',
    ],
  },
];

// icon 파일명(kebab-case) -> 컴포넌트 이름(PascalCase) 변환
function toComponentName(iconName: string) {
  const clean = iconName.replace(/^_/, '');
  const pascal = clean
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join('');
  return `${pascal}Icon`;
}

function getIcon(iconName: string): IconComponent | undefined {
  const compName = toComponentName(iconName);
  return (Icons as unknown as Record<string, IconComponent>)[compName];
}

function CopyableIcon({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);
  const Icon = getIcon(name);
  const compName = toComponentName(name);

  const handleCopy = async () => {
    const snippet = `import { ${compName} } from "@/components/icons";\n\n<${compName} className="size-6 text-gray-900" />`;
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      type='button'
      onClick={handleCopy}
      title={copied ? '코드 복사됨!' : `${name} 코드 복사`}
      className='group flex flex-col items-center gap-2'
    >
      <span className='flex size-28 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white text-gray-900 transition-colors group-hover:border-gray-300 group-hover:bg-gray-100'>
        {Icon ? (
          <Icon className='size-12' />
        ) : (
          <span className='size-6 rounded border border-dashed border-red-300' />
        )}
      </span>
      <code className='block min-h-[2.75em] w-28 leading-tight break-words text-center text-[16px] text-gray-500 group-hover:text-gray-700'>
        {copied
          ? '복사됨!'
          : name.split('_').map((part, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {part}
              </span>
            ))}
      </code>
    </button>
  );
}

export default function IconsPage() {
  return (
    <div className='max-w-12xl'>
      <h1 className='mb-4 text-6xl font-bold tracking-tight'>Icons</h1>
      <p className='mb-16 text-xl text-gray-600'>
        아이콘은 기능, 행동, 사물의 상징을 기호로 만든 것으로 효율적으로 정보를
        전달하는 역할을 합니다. 아이콘을 클릭하면 사용 코드가 복사됩니다.
      </p>

      <Image
        src='/guide.jpg'
        alt='아이콘 사용 가이드'
        width={3588}
        height={1416}
        className='mb-12 h-auto w-full rounded-md'
        priority
        unoptimized
      />

      <Image
        src='/guide_2.jpg'
        alt='아이콘 사용 가이드 2'
        width={3588}
        height={567}
        className='mb-12 h-auto w-full rounded-md'
        unoptimized
      />

      {ICON_GROUPS.map((group) => (
        <section key={group.title} className='mb-12'>
          <h2 className='mb-6 text-2xl font-bold'>{group.title}</h2>
          <div className='grid grid-cols-[repeat(12,7.5rem)] gap-10'>
            {group.icons.map((name) => (
              <CopyableIcon key={name} name={name} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
