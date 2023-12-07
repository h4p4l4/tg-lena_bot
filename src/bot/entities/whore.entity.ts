import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Image } from './image.entity';
import { City } from './city.entity';

@Entity()
@Unique(['personal_code'])
export class Whore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  personal_code: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Image, (image) => image.whore)
  images: Image;

  @Column()
  ownerUsername: string;

  @ManyToOne(() => City, (city) => city.whores)
  city: City;
}
