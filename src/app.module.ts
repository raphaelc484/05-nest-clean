import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateaccountController } from './controllers/create-account.controller'

@Module({
  controllers: [CreateaccountController],
  providers: [PrismaService],
})
export class AppModule {}
