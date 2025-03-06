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

  @Column({
    // 1. 길이
    length: 20,
    // 2. 중복 허용 x
    unique: true,
  })
  // 1. 길이가 20을 넘지 않을 것
  // 2. 유일무이한 값이 될 것(중복값 허용 x)
  nickname: string;

  @Column({
    unique: true,
  })
  // 1. 유일무이한 값이 될 것(중복값 허용 x)
  email: string;

  @Column()
  password: string;
}
