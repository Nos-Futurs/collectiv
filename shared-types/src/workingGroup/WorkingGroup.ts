import {WorkingGroupUsers} from './WorkingGroupOnUser';
import {Tag} from '../tag/Tag';

export interface WorkingGroup {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId :number;                 
  users: Array<WorkingGroupUsers>;
  tags: Array<Tag>;
}
