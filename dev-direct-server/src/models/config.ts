import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Config extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column
  component: string;

  @Column(DataType.JSON)
  props: JSON;
}
