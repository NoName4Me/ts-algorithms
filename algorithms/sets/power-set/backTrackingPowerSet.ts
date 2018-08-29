export default function backTrackingPowerSet<T>(origin: T[]) {
  return recursivePowerSet(origin);
}

function recursivePowerSet<T>(origin: T[], allSet: [T[]] = [[]], currentSet: T[] = [], pos: number = 0) {
  for (let i: number = pos; i < origin.length; i++) {
    currentSet.push(origin[i]);
    allSet.push([...currentSet]);
    recursivePowerSet(origin, allSet, currentSet, i + 1);
    currentSet.pop();
  }
  return allSet;
}

