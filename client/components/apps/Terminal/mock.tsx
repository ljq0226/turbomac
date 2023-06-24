export const FolderSystem = {
  0: {
    id: 0,
    title: '/',
    childIds: [1, 2, 3],
    parentId: 0,
  },
  1: {
    id: 1,
    title: 'Desktop',
    childIds: [4, 5],
    parentId: 0,
  },
  2: {
    id: 2,
    title: 'Documents',
    childIds: [],
    parentId: 0,
  },
  3: {
    id: 3,
    title: 'about.md',
    content: <ul>
    <li>👋 Hi, I’m @ljq0226</li>
    <li>📫 Contact me: luorom001@gmail.com</li>
    <li></li>
    </ul>,
    parentId: 0,
  },
  4: {
    id: 4,
    title: 'Reactdemo',
    childIds: [6],
    parentId: 1,
  },
  5: {
    id: 5,
    title: 'Nextdemo',
    childIds: [],
    parentId: 1,
  },
  6: {
    id: 6,
    title: 'usestate.md',
    content: <div>const [loading,setLoading]=useState(false)</div>,
    parentId: 4,
  },
}
