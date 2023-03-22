import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { UploadService } from './upload.service'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const COS = require('cos-nodejs-sdk-v5')

// const localPath = 'public/uploads'

@Controller('')
export class UploadController {
  private cos: any
  constructor(
    private uploadService: UploadService,
  ) {
    this.cos = new COS({
      SecretId: process.env.TX_SECRET_ID,
      SecretKey: process.env.TX_SECRET_KEY,
    })
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile('file') file: Express.Multer.File) {
    const { folder, filePath } = this.uploadService.getFilePath(file)
    // format the file size
    const fileSize = this.uploadService.formatFileSize(file)

    const params = {
      Bucket: process.env.TX_BUCKET,
      Region: process.env.TX_REGION,
      Key: filePath,
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
      size: fileSize,
    }
  }
}
