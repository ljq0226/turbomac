import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp() // get context
    const response = ctx.getResponse() // get response
    const status = exception.getStatus() // get status code

    // 设置错误信息
    const message = exception.message
      ? exception.message
      : `${status >= 500 ? 'Service Error' : 'Client Error'}`
    const errorResponse = {
      data: {},
      message,
      code: -1,
    }

    // 设置返回的状态码， 请求头，发送错误信息
    response.status(status)
    response.header('Content-Type', 'application/json; charset=utf-8')
    response.send(errorResponse)
  }
}
