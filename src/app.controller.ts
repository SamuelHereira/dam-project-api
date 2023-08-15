import { Multer } from 'multer';
import {
  Controller,
  Post,
  UploadedFile,
  Body,
  UseInterceptors,
  HttpException,
  HttpStatus,
  UploadedFiles,
  Get,
  Res,
  Param,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('archivo/:ruta')
  async getArchivo(@Param('ruta') ruta: string, @Res() res) {
    return res.sendFile(ruta, { root: 'uploads' });
  }
}
