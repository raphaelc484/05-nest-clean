import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionComment } from '../../enterprise/entities/question-comment'

export abstract class QuestionCommentRepository {
  abstract create(questionComment: QuestionComment): Promise<void>
  abstract findById(id: string): Promise<QuestionComment | null>
  abstract delete(questionComment: QuestionComment): Promise<void>
  abstract findManyByQuestionId(
    questionId: string,
    { page }: PaginationParams,
  ): Promise<QuestionComment[]>
}
