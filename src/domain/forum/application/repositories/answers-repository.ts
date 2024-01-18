import { PaginationParams } from '@/core/repositories/pagination-params'
import { Answer } from '../../enterprise/entities/answer'

export abstract class AnswersRepository {
  abstract findById(id: string): Promise<Answer | null>
  abstract create(answer: Answer): Promise<void>
  abstract delete(answer: Answer): Promise<void>
  abstract save(answer: Answer): Promise<void>
  abstract findManyByQuestionId(
    questionId: string,
    { page }: PaginationParams,
  ): Promise<Answer[]>
}
