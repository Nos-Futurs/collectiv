import { User } from '@collectiv/db-entities/backend';
import { FastifyRequest } from 'fastify';

export default interface RequestWithUser extends FastifyRequest {
  user?: User;
}
