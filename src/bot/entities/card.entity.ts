import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['card_number'])
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  card_number: number;
}
