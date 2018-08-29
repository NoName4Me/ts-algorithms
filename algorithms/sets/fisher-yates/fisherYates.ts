export default function fisherYates(list: number[]): number[] {
  let clonedList: number[] = list.slice(0);
  for (let i: number = clonedList.length - 1; i > 0; i--) {
    let randNum: number = Math.floor(Math.random() * (i + 1));
    [clonedList[i], clonedList[randNum]] = [clonedList[randNum], clonedList[i]];
  }
  return clonedList;
}