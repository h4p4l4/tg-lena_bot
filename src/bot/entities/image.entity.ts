import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Whore } from './whore.entity';

@Entity()
@Unique(['url'])
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Whore, (whore) => whore.images)
  whore: Whore;
}
