import { Injectable } from '@nestjs/common'

const image = ['gif', 'png', 'jpg', 'jpeg', 'bmp', 'webp']
const video = ['mp4', 'webm']
const audio = ['mp3', 'wav', 'ogg']
const document = ['pdf', 'docs', 'md', 'doc', 'txt', 'ppt', 'markdown']
@Injectable()
export class UploadService {
  getFilePath(file: Express.Multer.File) {
    const filename = `${(Math.random() * 1000).toFixed(0)}_${file.originalname}`
    let folder = ''
    if (image.includes(file.originalname.split('.').pop()))
      folder = 'image'
    else if (video.includes(file.originalname.split('.').pop()))
      folder = 'video'
    else if (audio.includes(file.originalname.split('.').pop()))
      folder = 'audio'
    else if (document.includes(file.originalname.split('.').pop()))
      folder = 'document'
    else
      folder = 'other'
    const filePath = `${folder}/${filename}`
    return { folder, filePath }
  }

  formatFileSize(file: Express.Multer.File) {
    const size = file.size
    if (size < 1000)
      return `${size}B`
    else if (size < 1000000)
      return `${(size / 1000).toFixed(2)}KB`
    else if (size < 1000000000)
      return `${(size / 1000).toFixed(2)}MB`
  }
}
