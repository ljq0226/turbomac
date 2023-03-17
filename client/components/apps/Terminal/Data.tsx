interface TerminalData {
  id: string
  title: string
  type: 'folder' | 'file'
  content?: JSX.Element | string
  children?: TerminalData[]
}

// Define the folder structure
export const FolderStructure: TerminalData[] = [
  {
    id: 'desktop',
    title: 'Desktop',
    type: 'folder',
    children: [
      {
        id: 'test1',
        title: 'ReactDemo',
        type: 'folder',
        children: [],
      },
      {
        id: 'test1',
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
]
