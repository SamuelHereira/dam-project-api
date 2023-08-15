// create dto
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MaxLength(10)
  @IsNotEmpty()
  cedula: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  @MaxLength(50)
  @IsNotEmpty()
  correo: string;

  @IsString()
  @MaxLength(10)
  @IsNotEmpty()
  celular: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  direccion: string;

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  carrera: string;

  @IsNumber()
  @IsNotEmpty()
  semestre: number;
}
