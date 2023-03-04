import type { AppsData } from '@/types/app'
import LinkWeb from '@/components/apps/LinkWeb'
const apps: AppsData[] = [
  {
    id: 'launchpad',
    title: 'Launchpad',
    img: '/img/icons/launchpad.png',
  },
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
    width: 1024,
    img: '/img/icons/safari.png',
    content: <div>123</div>,
  },
  {
    id: 'vscode',
    title: 'VSCode',
    width: 860,
    height: 560,
    img: '/img/icons/vscode.png',
    content: <LinkWeb src='https://github1s.com/ljq0226/my-mac-apps' title='VSCode' />,
  },
  {
    id: 'spotify',
    title: 'Spotify',
    width: 860,
    height: 560,
    img: '/img/icons/spotify.png',
    content: <LinkWeb src='https://open.spotify.com/' title='Spotify' />,
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
    img: '/img/icons/mail.png',
    link: 'mailto:luorom001@gmail.com',
    content: <></>,
  },
  {
    id: 'github',
    title: 'Github',
    img: '/img/icons/github.png',
    link: 'https://github.com/ljq0226',
    content: <></>,
  },
]

export default apps
