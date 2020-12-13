import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { cookieExtractor } from '../api-auth-data-access.helper'
import { ApiAuthDataAccessService } from '../api-auth-data-access.service'
import { JwtDto } from '../dto/jwt.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: ApiAuthDataAccessService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'NXPM_STACK_SECRET1062508',
    })
  }

  async validate(payload: JwtDto) {
    const user = await this.auth.validateUser(payload.userId)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
