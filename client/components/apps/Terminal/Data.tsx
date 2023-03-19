export interface TerminalData {
  id: string
  title: string
  type: string
  content?: JSX.Element | string
  children: TerminalData[]
}

// Define the folder structure
export const FolderStructure: TerminalData = {
  id: '',
  title: '',
  type: 'root',
  children: [{
    id: 'about',
    title: 'Aboutme.md',
    type: 'file',
    content: <ul>
      <li>👋 Hi, I’m @ljq0226</li>
      <li>🐏 I'm 20 years old,a junior student</li>
      <li>👀 I’m interested in React TypeScript NextJS NestJS and some new technology</li>
      <li>🐣 This is my first fullstack project</li>
      <li>💞️ I want to find an FE internship</li>
      <li>🌱 myGithub:<a href="https://github.com/ljq0226" className="text-primary">https://github.com/ljq0226</a></li>
      <li>📫 Contact me: luorom001@gmail.com</li>
      <li></li>
    </ul>,
    children: [],
  },
  {
    id: 'desktop',
    title: 'Desktop',
    type: 'folder',
    children: [
      {
        id: 'test1',
        title: 'ReactDemo',
        type: 'folder',
        children: [
          {
            id: 'test3',
            title: 'test3',
            type: 'folder',
            children: [],
          },
        ],
      },
      {
        id: 'test2',
        title: 'NextDemo',
        type: 'folder',
        children: [],
      },
    ],
  },

  {
    id: 'downloads',
    title: 'Downloads',
    type: 'folder',
    children: [],
  },
  {
    id: 'documents',
    title: 'Documents',
    type: 'folder',
    children: [],
  },
  ],

}
