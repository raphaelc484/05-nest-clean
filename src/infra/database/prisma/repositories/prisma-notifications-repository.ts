import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { NotificationRepository } from '@/domain/notification/application/repositories/notification-repository'
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const data = PrismaNotificationMapper.toPrisma(notification)

    await this.prisma.notification.create({
      data,
    })
  }

  async findById(id: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id,
      },
    })

    if (!notification) {
      return null
    }

    return PrismaNotificationMapper.toDomain(notification)
  }

  async save(notification: Notification): Promise<void> {
    const data = PrismaNotificationMapper.toPrisma(notification)

    await this.prisma.notification.update({
      where: {
        id: data.id,
      },
      data,
    })
  }
}
