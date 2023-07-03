import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import PrismaService from '../database/prisma.service';
import { UserService } from '../user/user.service';
import authConfigService from './config/auth.config';

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfigService.KEY)
    private readonly authConfig: ConfigType<typeof authConfigService>,
    private readonly prisma: PrismaService,
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<{ user: Omit<User, 'password'> }> {
    const user = await this.usersService.findOne(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const payload = { sub: user.id, username: user.email };
      const { password, ...result } = user;
      return {
        user: result,
      };
    }
    throw new UnauthorizedException();
  }

  async login(user: User): Promise<{ accessToken: string; user: User }> {
    const payload = { username: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: this.authConfig.jwtSecret,
      }),
      user,
    };
  }

  async signUp(userData: Omit<User, 'id'>): Promise<User> {
    const hashedPassword = await this.hashPassword(userData.password);
    const { password, ...dataRest } = userData;
    return this.prisma.user.create({
      data: {
        password: hashedPassword,
        ...dataRest,
      },
    });
  }

  /* ----------------------------- Private methods ---------------------------- */
  /**
   * Hashing the password using bcrypt library
   *
   * @private
   * @param {string} password
   * @return {*}  {Promise<string>}
   * @memberof UserService
   */
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
}
