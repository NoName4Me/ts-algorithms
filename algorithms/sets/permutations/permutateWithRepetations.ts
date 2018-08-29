export default function permutateWithRepetation<T>(options: T[], len: number = options.length): T[][] {
  if (len === 1) {
    return options.map(option => [option]);
  }

  const permutations: T[][] = [];
  options.forEach(option => {
    const smallerPermutations = permutateWithRepetation(options, len - 1);
    smallerPermutations.forEach(smallerPermutation => {
      permutations.push([option].concat(smallerPermutation));
    });
  });

  return permutations;
}