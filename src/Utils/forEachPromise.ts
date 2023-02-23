import reduce from 'lodash/reduce'

interface Handler<T> {
  (item: T, index: number): Promise<any>
}

export default function forEachPromise<T>(
  arr: undefined | T[],
  handler: Handler<T>,
) {
  return reduce(
    arr,
    (current: Promise<any>, item: T, index: number) =>
      current.then(() => handler(item, index)),
    Promise.resolve(),
  )
}
