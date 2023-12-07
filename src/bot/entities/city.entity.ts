import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Whore } from './whore.entity';

@Entity()
@Unique(['name'])
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Whore, (whore) => whore.city)
  whores: Whore[];
}
