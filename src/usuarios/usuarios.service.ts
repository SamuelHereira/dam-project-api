import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuarios.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async find(search: string): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      // where like
      where: [
        { id: isNaN(Number(search)) ? undefined : Number(search) },
        { nombre: Like(`%${search}%`) },
        { apellido: Like(`%${search}%`) },
        { cedula: Like(`%${search}%`) },
        { carrera: Like(`%${search}%`) },
        { semestre: isNaN(Number(search)) ? undefined : Number(search) },
      ],
    });
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOneById(id);
  }

  async create(usuario: Usuario) {
    await this.usuarioRepository.save(usuario);

    return usuario;
  }

  async update(id: number, usuario: Usuario) {
    const usuarioToUpdate = await this.usuarioRepository.findOneById(id);
    if (!usuarioToUpdate.id) {
      // tslint:disable-next-line:no-console
      console.error("usuario doesn't exist");
    }
    await this.usuarioRepository.update({ id }, usuario);
    return usuarioToUpdate;
  }
}
