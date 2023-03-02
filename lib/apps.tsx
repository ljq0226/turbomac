import type { AppsData } from '@/types/app'
import VSCode from '@/components/apps/VSCode'
const apps: AppsData[] = [
  // {
  //   id: 'launchpad',
  //   title: 'Launchpad',
  //   desktop: false,
  //   img: '/img/icons/launchpad.png',
  // },
  // {
  //   id: 'bear',
  //   title: 'Bear',
  //   desktop: true,
  //   width: 860,
  //   height: 500,
  //   img: '/img/icons/bear.png',
  //   content: <div>123</div>,
  // },
  {
    id: 'safari',
    title: 'Safari',
    desktop: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: '/img/icons/safari.png',
    content: <VSCode />,
  },
  {
    id: 'vscode',
    title: 'VSCode',
    desktop: true,
    img: '/img/icons/vscode.png',
    content: <VSCode />,
  },
  // {
  //   id: 'facetime',
  //   title: 'FaceTime',
  //   desktop: true,
  //   img: '/img/icons/facetime.png',
  //   height: 530,
  //   content: <div>123</div>,
  // },
  // {
  //   id: 'terminal',
  //   title: 'Terminal',
  //   desktop: true,
  //   img: '/img/icons/terminal.png',
  //   content: <div>123</div>,
  // },
  {
    id: 'email',
    title: 'Mail',
    desktop: false,
    img: '/img/icons/mail.png',
    link: 'mailto:luorom001@gmail.com',
    content: <></>,
  },
  {
    id: 'github',
    title: 'Github',
    desktop: true,
    img: '/img/icons/github.png',
    link: 'https://github.com/ljq0226',
    content: <></>,
  },
]

export default apps
