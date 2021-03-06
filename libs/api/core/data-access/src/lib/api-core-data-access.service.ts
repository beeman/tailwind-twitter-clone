import { BadRequestException, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, UserCreateInput } from '@prisma/client'
import { getGravatarUrl, hashPassword } from './api-core-data-access.helper'

@Injectable()
export class ApiCoreDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()
  }

  public async onModuleDestroy() {
    await this.$disconnect()
  }

  public async onModuleInit() {
    await this.$connect()
  }

  async createUser(input: Partial<UserCreateInput>) {
    const email = input.email.trim()
    const existing = await this.findUserByEmail(email)
    if (existing) {
      throw new BadRequestException(`Can't create user with email ${email}`)
    }
    const password = hashPassword(input.password)

    // The first user will get the Web role
    const hasWeb = await this.user.count({ where: { role: 'Web' } })
    const role = hasWeb ? 'User' : 'Web'

    return this.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email,
        username: email,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password,
        role,
      },
    })
  }

  public findUserByEmail(email: string) {
    return this.user.findUnique({ where: { email } })
  }

  public findUserById(userId: string) {
    return this.user.findUnique({ where: { id: userId } })
  }

  public findUserByUsername(username: string) {
    return this.user.findUnique({ where: { username } })
  }
}
