/**
 * id: number
 * nickname: string
 * email: striong
 * password: string
 * role: [RolesEnum.USER, RolesEnum.ADMIN]
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
