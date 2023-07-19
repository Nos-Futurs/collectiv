import { Body, Controller, HttpException, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { FastifyReply } from 'fastify';
import { AuthService } from './auth.service';
import LocalAuthGuard from './guard/local.auth.guard';
import RequestWithUser from './types/RequestWithUser';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async signIn(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<{ accessToken: string; user: Omit<User, 'password'> }> {
    const cookieProp = {
      path: '/',
      httpOnly: true,
      sameSite: 'none' as const, // https://stackoverflow.com/questions/67272990/express-sessions-cookie-same-site-typescript-error
      secure: true,
      maxAge: 60 * 60 * 2, // 2hours - token espiration 1 hour
    };

    if (!req.user) {
      throw new HttpException({ reason: 'The user was not found' }, HttpStatus.UNAUTHORIZED);
    }
    const { accessToken, user } = await this.authService.login(req.user);
    response.setCookie('accessToken', accessToken, cookieProp);
    return { accessToken, user };
  }

  @Post('signup')
  async signUp(@Body() userData: Omit<User, 'id'>): Promise<User> {
    return this.authService.signUp(userData);
  }
}
