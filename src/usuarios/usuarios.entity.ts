import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  cedula: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  celular: string;

  @Column()
  direccion: string;

  @Column()
  carrera: string;

  @Column()
  semestre: number;

  @Column({ nullable: true })
  foto: string;

  @Column({ nullable: true })
  saludo: string;

  @Column({ nullable: true })
  titulo: string;

  @Column({ default: 'A', nullable: true })
  estado?: string;

  @Column({ nullable: true })
  longitud_gps?: string;

  @Column({ nullable: true })
  latitud_gps?: string;
}
