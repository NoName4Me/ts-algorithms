export default function permutateWithoutRepetation<T>(options: T[]): T[][] {
  if (options.length === 1) {
    return [options];
  }

  const permutations: T[][] = [];

  const smallerPermutations = permutateWithoutRepetation(options.slice(1));

  const firstItem: T = options[0];

  for (let i: number = 0; i < smallerPermutations.length; i++) {
    const smallerPermutation = smallerPermutations[i];
    for (let j: number = 0; j <= smallerPermutations.length; j++) {
      const headPart = smallerPermutation.slice(0, j);
      const tailPart = smallerPermutation.slice(j);
      permutations.push(headPart.concat([firstItem], tailPart));
    }
  }

  return permutations;
}