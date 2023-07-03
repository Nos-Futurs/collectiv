import { User } from '@prisma/client';
import { FastifyRequest } from 'fastify';

export default interface RequestWithUser extends FastifyRequest {
  user?: User;
}
