import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachment-repository'
import { PrismaAttachmentsMapper } from '../mappers/prisma-attachment-mapper'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'

@Injectable()
export class PrismaAttachmentsRepository implements AttachmentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(attachment: Attachment): Promise<void> {
    const data = PrismaAttachmentsMapper.toPrisma(attachment)

    await this.prisma.attachment.create({
      data,
    })
  }
}
