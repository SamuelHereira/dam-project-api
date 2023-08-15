import { HttpException } from '@nestjs/common';

class CustomHttpException extends HttpException {
  constructor(message, statusCode) {
    super(message, statusCode);
  }
}
