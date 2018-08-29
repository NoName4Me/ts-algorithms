export default function updateBit(num: number, bitPosition: number, newValue: number): number {
  const normalizedValue = newValue ? 1 : 0;
  const clearMask = ~(1 << bitPosition);
  return (num & clearMask) | (normalizedValue << bitPosition);
}