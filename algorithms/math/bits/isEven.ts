export default function isEven(num: number): boolean {
  return (num & 1) === 0;
}