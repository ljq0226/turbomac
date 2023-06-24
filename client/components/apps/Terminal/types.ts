interface CommandList {
  [key: string]:
  { (): void } | { (arg: string): void }
}
interface FolderSysteamType {
  id: number
  title: string
  content: any
  childIds?: []
  parentId: number
}

export type { CommandList, FolderSysteamType }
