import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const COS = require('cos-nodejs-sdk-v5')

const image = ['gif', 'png', 'jpg', 'jpeg', 'bmp', 'webp']
const video = ['mp4', 'webm']
const audio = ['mp3', 'wav', 'ogg']
const document = ['pdf', 'docs', 'md', 'doc', 'txt', 'ppt']
// const localPath = 'public/uploads'

@Controller('')
export class UploadController {
  private cos: any
  constructor() {
    this.cos = new COS({
      SecretId: process.env.TX_SECRET_ID,
      SecretKey: process.env.TX_SECRET_KEY,
    })
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile('file') file: Express.Multer.File) {
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

    const params = {
      Bucket: process.env.TX_BUCKET,
      Region: process.env.TX_REGION,
      Key: `${folder}/${filename}`,
      Body: file.buffer,
    }
    const result = await this.cos.putObject(params)
    // if need put file in local
    // const localFilePath = `${localPath}/${folder}/${filename}`
    // fs.writeFileSync(localFilePath, file.buffer)
    return {
      msg: 'upload file',
      location: `https://${result.Location}`,
      type: folder,
    }
  }
}
