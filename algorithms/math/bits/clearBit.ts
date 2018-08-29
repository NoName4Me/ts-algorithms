export default function clearBit(num: number, bitPosition: number): number {
  return num & ~(1 << bitPosition);
} 