import Stack from "../StackOnArray";

export default class BrowserForwardBackward {
  history: Stack<string>;
  future: Stack<string>;
  current: string;

  constructor() {
    this.history = new Stack<string>();
    this.future = new Stack<string>();
    this.current = null;
  }

  forward(): string {
    const url = this.future.pop();
    if (url) {
      this.history.push(this.current);
      this.current = url;
    }

    return this.current;
  }

  backward(): string {
    const url = this.history.pop();
    if (url) {
      this.future.push(this.current);
      this.current = url;
    }
    return this.current;
  }

  open(url: string): void {
    if(this.current) {
      this.history.push(this.current)
    }
    this.current = url;
    this.future.empty();
  }
}