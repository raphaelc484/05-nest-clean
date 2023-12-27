export abstract class HashCompare {
  abstract compare(plain: string): Promise<boolean>
}
