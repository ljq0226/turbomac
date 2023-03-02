import type { AppsData } from '@/types/app'

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
    desktop: true,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: '/img/icons/safari.png',
    content: <div>123</div>,
  },
  {
    id: 'vscode',
    title: 'VSCode',
    desktop: true,
    img: '/img/icons/vscode.png',
    content: <div>123</div>,
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
  // {
  //   id: 'email',
  //   title: 'Mail',
  //   desktop: false,
  //   img: '/img/icons/mail.png',
  //   link: 'mailto:renovamenzxh@gmail.com',
  // },
  {
    id: 'github',
    title: 'Github',
    desktop: false,
    img: '/img/icons/github.png',
    link: 'https://github.com/ljq0226',
  },
]

export default apps
