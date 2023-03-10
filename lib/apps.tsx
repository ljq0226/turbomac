import type { AppsData } from '@/types/app'
import LinkWeb from '@/components/apps/LinkWeb'
import QQ from '@/components/apps/qq/QQ'
import Login from '@/components/apps/qq/Login'

const apps: AppsData[] = [
  {
    id: 'launchpad',
    title: 'Launchpad',
    img: '/img/icons/launchpad.png',
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
    content: <LinkWeb src='https://my-mac-apps.netlify.app/' title='Spotify' />,
  },
  {
    id: 'qq',
    title: 'QQ',
    width: 969,
    height: 640,
    img: '/img/icons/qq.png',
    content: <QQ />,
  },
  {
    id: 'login',
    title: 'Login',
    width: 320,
    height: 448,
    img: '/img/icons/qq.png',
    content: <Login />,
  },
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
