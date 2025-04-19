export interface UseCase<T, U> {
  execute(payload: T, ...props: any): Promise<U>;
}
