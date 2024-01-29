import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository'
import { PrismaQuestionCommentRepository } from './prisma/repositories/prisma-question-comment-repository'
import { PrismaQuestionRepository } from './prisma/repositories/prisma-question-repository'
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answer-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { PrismaAnswerCommentRepository } from './prisma/repositories/prisma-answer-comment-repository'
import { QuestionRepository } from '@/domain/forum/application/repositories/question-repository'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { PrismaStudentsRepository } from './prisma/repositories/prisma-students-repository'
import { QuestionCommentRepository } from '@/domain/forum/application/repositories/question-comment-repository'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { AnswerAttachmentRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerCommentRepository } from '@/domain/forum/application/repositories/answer-comment-repository'
import { QuestionAttachmentRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachment-repository'
import { PrismaAttachmentsRepository } from './prisma/repositories/prisma-attachment-repository'
import { NotificationRepository } from '@/domain/notification/application/repositories/notification-repository'
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionRepository,
      useClass: PrismaQuestionRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    {
      provide: QuestionAttachmentRepository,
      useClass: PrismaQuestionAttachmentsRepository,
    },
    {
      provide: QuestionCommentRepository,
      useClass: PrismaQuestionCommentRepository,
    },
    { provide: AnswersRepository, useClass: PrismaAnswerRepository },
    {
      provide: AnswerAttachmentRepository,
      useClass: PrismaAnswerAttachmentsRepository,
    },
    {
      provide: AnswerCommentRepository,
      useClass: PrismaAnswerCommentRepository,
    },
    {
      provide: AttachmentsRepository,
      useClass: PrismaAttachmentsRepository,
    },
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [
    QuestionRepository,
    StudentsRepository,
    PrismaService,
    QuestionAttachmentRepository,
    QuestionCommentRepository,
    AnswersRepository,
    AnswerAttachmentRepository,
    AnswerCommentRepository,
    AttachmentsRepository,
    NotificationRepository,
  ],
})
export class DatabaseModule {}
