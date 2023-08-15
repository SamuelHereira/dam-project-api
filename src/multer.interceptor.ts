import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MulterError } from 'multer';

@Injectable()
export class MulterInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error: MulterError) => {
        if (error instanceof MulterError) {
          throw new HttpException(
            'Error al cargar el archivo: ' + error.message,
            HttpStatus.BAD_REQUEST,
          );
        }
        return throwError(error);
      }),
    );
  }
}
