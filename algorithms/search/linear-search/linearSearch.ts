import Comparator from "../../../utils/Comparator";

export default function linearSearch<T>(arr: T[], item: T, comparatorCallback?:Function):number {
  const comparator = new Comparator(comparatorCallback);
  for(let i=0;i<arr.length;i++) {
    if (comparator.equal(arr[i], item)) {
      return i;
    }
  }
  
  return -1;
}