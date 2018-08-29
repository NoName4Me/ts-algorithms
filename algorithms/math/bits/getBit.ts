export default function getBit(number: number, bitPosition: number): number {
  return (number >> bitPosition) & 1;
}