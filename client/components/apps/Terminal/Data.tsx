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
  children: [
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
      id: 'about',
      title: 'about.md',
      type: 'file',
      content: <div> hello,my name is ljq</div>,
      children: [],

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
