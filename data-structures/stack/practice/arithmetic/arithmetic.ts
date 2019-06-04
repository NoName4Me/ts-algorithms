import Stack from "../../Stack";

export function arithmetic(str: string): number {
  function _calc() {
    let a = nStack.pop()
    let b = nStack.pop()
    let operator = oStack.pop()
    nStack.push(doCalc(b, a, operator))
  }
  const nStack = new Stack<number>()
  const oStack = new Stack<string>()
  const input = str.split(' ')
  for (let i = 0; i < input.length; i++) {
    const c = input[i]
    
    if (/\d+/.test(c)) {
      nStack.push(+c)
    } else {
      while (!hasHighPriority(c, oStack.peek())) {
        _calc()
      }
      oStack.push(c);
    }
  }

  while (oStack.peek() !== null) {
    _calc()
  }
  return nStack.pop()
}

export function hasHighPriority(current, compare): boolean {
  if (compare === null) {
    return true
  }

  if (/[*\/]/.test(current) && /[+-]/.test(compare)) {
    return true
  }
  return false
}

export function doCalc(a: number, b: number, o: string): number {
  switch (o) {
    case '+':
      return a + b
    case '-':
      return a - b

    case '*':
      return a * b

    case '/':
      return a / b

    default:
      break;
  }
}