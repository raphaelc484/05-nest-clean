export abstract class Encrypter {
  abstract encrypt(paylod: Record<string, unknown>): Promise<string>
}
