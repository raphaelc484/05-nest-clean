import { PaginationParams } from '@/core/repositories/pagination-params'
import { Question } from '../../enterprise/entities/question'

export abstract class QuestionRepository {
  abstract create(question: Question): Promise<void>
  abstract findBySlug(slug: string): Promise<Question | null>
  abstract findById(id: string): Promise<Question | null>
  abstract findManyRecent({ page }: PaginationParams): Promise<Question[]>
  abstract delete(question: Question): Promise<void>
  abstract save(question: Question): Promise<void>
}
