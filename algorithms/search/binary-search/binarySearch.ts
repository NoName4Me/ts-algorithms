import Comparator from '../../../utils/Comparator';

const FIRST_EQUAL = 0;
const LAST_EQUAL = 1;
const FIRST_LARGER_EQUAL = 2;
const LAST_LESS_EQUAL = 3;

export default function binarySearch<T>(arr: T[], item: T, comparatorCallback?: Function, type: number = FIRST_EQUAL): number {

  switch (type) {
    case FIRST_EQUAL:
      return firstEqual(arr, item, comparatorCallback);

    case LAST_EQUAL:
      return lastEqual(arr, item, comparatorCallback);
    case FIRST_LARGER_EQUAL:

      return firstGreaterOrEqual(arr, item, comparatorCallback);
    case LAST_LESS_EQUAL:

      return lastLessOrEqual(arr, item, comparatorCallback);
    default:
      return -1;
  }
}

export function firstEqual<T>(arr: T[], item: T, comparatorCallback?: Function): number {
  const comparator = new Comparator(comparatorCallback);
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + ((high - low) >> 1)); // 不直接 low + hight 是当数字较大时可能会溢出
    if (comparator.lessThan(item, arr[middle])) {
      high = middle - 1;
    } else if (comparator.greaterThan(item, arr[middle])) {
      low = middle + 1;
    } else {
      if (middle === 0 || !comparator.equal(item, arr[middle - 1])) {
        return middle;
      } else {
        high = middle - 1;
      }
    }
  }
  return -1;
}

export function lastEqual<T>(arr: T[], item: T, comparatorCallback?: Function): number {
  const comparator = new Comparator(comparatorCallback);
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + ((high - low) >> 1)); // 不直接 low + hight 是当数字较大时可能会溢出
    if (comparator.lessThan(item, arr[middle])) {
      high = middle - 1;
    } else if (comparator.greaterThan(item, arr[middle])) {
      low = middle + 1;
    } else {
      if (middle === arr.length - 1 || !comparator.equal(item, arr[middle + 1])) {
        return middle;
      } else {
        low = middle + 1;
      }
    }
  }
  return -1;
}

export function firstGreaterOrEqual<T>(arr: T[], item: T, comparatorCallback?: Function): number {
  const comparator = new Comparator(comparatorCallback);
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + ((high - low) >> 1)); // 不直接 low + hight 是当数字较大时可能会溢出
    if (comparator.greaterThan(item, arr[middle])) {
      low = middle + 1;
    } else {
      if (middle === 0 || comparator.greaterThan(item, arr[middle - 1])) {
        return middle;
      } else {
        high = middle - 1;
      }
    }
  }
  return -1;
}

export function lastLessOrEqual<T>(arr: T[], item: T, comparatorCallback?: Function): number {
  const comparator = new Comparator(comparatorCallback);
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + ((high - low) >> 1)); // 不直接 low + hight 是当数字较大时可能会溢出
    if (comparator.lessThan(item, arr[middle])) {
      high = middle - 1;
    } else {
      if (middle === arr.length - 1 || comparator.lessThan(item, arr[middle + 1])) {
        return middle;
      } else {
        low = middle + 1;
      }
    }
  }
  return -1;
}



