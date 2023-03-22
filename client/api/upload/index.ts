import { uploadFile } from '@/lib/http'

export function upload(file: File) {
  return uploadFile('upload', file)
}
