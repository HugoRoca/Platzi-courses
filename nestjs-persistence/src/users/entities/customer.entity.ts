import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm';
import { DateAt } from '../../database/dateAt.entity';
import { User } from './user.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column(() => DateAt)
  register: DateAt;

  @OneToOne(() => User, (user) => user.customer, { nullable: true })
  user: User;
}
