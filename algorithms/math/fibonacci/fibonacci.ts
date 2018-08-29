export default function fibonacci(n: number): number[] {
  let list: number[] = [1];
  if (n === 1) {
    return list;
  }

  let current: number = 1;
  let previous: number = 0;
  let iterator: number = n - 1;

  while (iterator) {
    current += previous;
    previous = current - previous;
    list.push(current);
    iterator--;
  }
  return list;
}