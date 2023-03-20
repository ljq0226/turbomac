import type { AppsData } from 'types/configs/app'
import Terminal from '../components/apps/Terminal/Terminal'
import LinkWeb from '@/components/apps/LinkWeb'
import QQ from '@/components/apps/qq/QQ'
import Login from '@/components/apps/qq/Login'
import ChatGPT from '@/components/apps/ChatGPT/ChatGPT'
import FaceTime from '@/components/apps/FaceTime/FaceTime'
// import { useUserStore } from '@/store'
// const username = useUserStore(s => s.username)

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
    content: <LinkWeb src='https://github1s.com/ljq0226/turbomac' title='VSCode' />,
  },
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    width: 440,
    height: 580,
    img: '/img/icons/chatgpt.png',
    content: <ChatGPT />,
  },
  {
    id: 'terminal',
    title: 'Terminal',
    width: 600,
    height: 540,
    img: '/img/icons/terminal.png',
    content: <Terminal />,
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
    id: 'facetime',
    title: 'FaceTime',
    img: 'img/icons/facetime.png',
    height: 530,
    content: <FaceTime />,
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
