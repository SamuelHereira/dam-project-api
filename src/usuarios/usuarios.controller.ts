import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Query,
  Response,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Usuario } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateUsuarioDto } from './usuarios.dto';
import { response } from 'express';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async findAll(@Query('search') search: string): Promise<any> {
    try {
      console.log('search', search);
      let usuarios: Usuario[] = [];
      if (search) {
        usuarios = await this.usuariosService.find(search);
      } else {
        usuarios = await this.usuariosService.findAll();
      }

      return {
        message: 'Usuarios encontrados',
        statusCode: 200,
        usuarios,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          message: 'Error al buscar los usuarios',
          statusCode: 400,
        },
        400,
      );
    }
  }

  @Post('create')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'foto', maxCount: 1 },
      { name: 'titulo', maxCount: 1 },
      { name: 'saludo', maxCount: 1 },
    ]),
  )
  async create(
    @UploadedFiles()
    files: {
      foto: Express.Multer.File;
      titulo: Express.Multer.File;
      saludo: Express.Multer.File;
    },
    @Body() body: CreateUsuarioDto,
  ) {
    console.log({
      ...body,
      files,
    });
    try {
      await this.usuariosService.create({
        ...body,
        foto: files.foto?.[0]?.filename,
        titulo: files.titulo?.[0]?.filename,
        saludo: files.saludo?.[0]?.filename,
      });

      console.log('Usuario creado correctamente');

      return {
        message: 'Usuario creado correctamente',
        statusCode: 200,
      };
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Error al crear el usuario, por favor verifique que los datos sean correctos',
        500,
      );
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'foto', maxCount: 1 },
      { name: 'titulo', maxCount: 1 },
      { name: 'saludo', maxCount: 1 },
    ]),
  )
  async update(
    @UploadedFiles()
    files: {
      foto: Express.Multer.File;
      titulo: Express.Multer.File;
      saludo: Express.Multer.File;
    },
    @Body() body: CreateUsuarioDto,
    @Response() response,
    @Param('id') id: number,
  ) {
    try {
      console.log('files', files);

      await this.usuariosService.update(id, {
        ...body,
        foto: files.foto?.[0]?.filename,
        titulo: files.titulo?.[0]?.filename,
        saludo: files.saludo?.[0]?.filename,
      });
      return response.status(200).json({
        message: 'Usuario actualizado correctamente',
        statusCode: 200,
      });
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Error al actualizar el usuario, por favor verifique que los datos sean correctos',
        500,
      );
    }
  }
}
