import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { InMemoryQuestionCommentRepository } from 'test/repositories/in-memory-question-comment-repository'
import { FetchQuestionCommentsUseCase } from './fetch-question-comments'
import { makeQuestionComment } from 'test/factories/make-question-comment'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryQuestionCommentRepository: InMemoryQuestionCommentRepository
let sut: FetchQuestionCommentsUseCase

describe('Fech question comment use case', () => {
  beforeEach(async () => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryQuestionCommentRepository = new InMemoryQuestionCommentRepository(
      inMemoryStudentsRepository,
    )
    sut = new FetchQuestionCommentsUseCase(inMemoryQuestionCommentRepository)
  })

  it('should be able to fetch question comment', async () => {
    const student = makeStudent({ name: 'John Doe' })

    inMemoryStudentsRepository.items.push(student)

    const comment1 = makeQuestionComment({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })
    const comment2 = makeQuestionComment({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })
    const comment3 = makeQuestionComment({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })

    await inMemoryQuestionCommentRepository.create(comment1)
    await inMemoryQuestionCommentRepository.create(comment2)
    await inMemoryQuestionCommentRepository.create(comment3)

    const result = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(result.value?.comments).toHaveLength(3)
    expect(result.value?.comments).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          author: 'John Doe',
          commentId: comment1.id,
        }),
        expect.objectContaining({
          author: 'John Doe',
          commentId: comment2.id,
        }),
        expect.objectContaining({
          author: 'John Doe',
          commentId: comment3.id,
        }),
      ]),
    )
  })

  it('should be able to fetch paginated recent comment', async () => {
    const student = makeStudent({ name: 'John Doe' })

    inMemoryStudentsRepository.items.push(student)

    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionCommentRepository.create(
        makeQuestionComment({
          questionId: new UniqueEntityId('question-1'),
          authorId: student.id,
        }),
      )
    }

    const result = await sut.execute({
      questionId: 'question-1',
      page: 2,
    })

    expect(result.value?.comments).toHaveLength(2)
  })
})
