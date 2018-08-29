export default function combineWithoutRepetations<T>(options: T[], comboLength: number): T[][] {
  if (comboLength === 1) {
    return options.map(option => [option]);
  }

  const combos: T[][] = [];

  options.forEach((option, idx) => {
    const smallerCombos = combineWithoutRepetations(options.slice(idx + 1), comboLength - 1);
    smallerCombos.forEach(smallerCombo => {
      combos.push([option].concat(smallerCombo));
    });

  })
  return combos;
}