export default function combineWithRepetations<T>(options: T[], comboLength: number): T[][] {
  if (comboLength === 1) {
    return options.map(option => [option]);
  }

  const combos: T[][] = [];

  options.forEach(option => {
    const smallerCombos = combineWithRepetations(options, comboLength - 1);
    smallerCombos.forEach(smallerCombo => {
      combos.push([option].concat(smallerCombo));
    });
  })
  return combos;
}