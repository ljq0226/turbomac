import { HttpException, HttpStatus } from '@nestjs/common'

const Error = (code: number, msg: string) => {
  switch (code) {
    case 400:
      throw new HttpException(msg, HttpStatus.BAD_REQUEST)

    case 401:
      throw new HttpException(msg, HttpStatus.UNAUTHORIZED)

    case 403:
      throw new HttpException(msg, HttpStatus.FORBIDDEN)

    case 404:
      throw new HttpException(msg, HttpStatus.NOT_FOUND)

    case 408:
      throw new HttpException(msg, HttpStatus.REQUEST_TIMEOUT)

    case 500:
      throw new HttpException(msg, HttpStatus.INTERNAL_SERVER_ERROR)

    case 502:
      throw new HttpException(msg, HttpStatus.BAD_GATEWAY)
  }
}

export default Error
