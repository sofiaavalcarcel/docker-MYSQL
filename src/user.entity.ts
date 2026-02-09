import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ default: true })
  Estado: boolean;

  @CreateDateColumn()
  Fecha_creacion: Date;

  @UpdateDateColumn()
  Fecha_actualizacion: Date;
}
