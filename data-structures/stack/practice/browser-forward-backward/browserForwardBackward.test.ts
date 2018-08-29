import { expect } from 'chai';
import BrowserForwardBackward from './BrowserForwardBackward';

describe('栈模拟浏览器前进后退', () => {
  it('初始化', () => {
    const browser = new BrowserForwardBackward();
    expect(browser.history.list).deep.equal([]);
    expect(browser.future.list).deep.equal([]);
    expect(browser.current).to.null;
    expect(browser.backward()).to.null;
    expect(browser.forward()).to.null;
  });

  it('简单前进&后退', () => {
    const browser = new BrowserForwardBackward();
    browser.open('aaa');
    browser.open('bbb');
    expect(browser.current).equal('bbb');
    expect(browser.history.list).deep.equal(['aaa']);
    browser.open('ccc');
    expect(browser.current).equal('ccc');
    expect(browser.history.list).deep.equal(['aaa', 'bbb']);
    expect(browser.future.list).deep.equal([]);
    expect(browser.backward()).equal('bbb');
    expect(browser.backward()).equal('aaa');
    expect(browser.history.toString()).deep.equal('');
    expect(browser.future.toString()).equal('ccc,bbb');
    expect(browser.forward()).equal('bbb');
    expect(browser.history.toString()).equal('aaa' );
    expect(browser.future.toString()).equal('ccc');
  });

  it('复杂前进&后退', () => {
    const browser = new BrowserForwardBackward();
    browser.open('aaa');
    browser.open('bbb');
    expect(browser.current).equal('bbb');
    expect(browser.history.list).deep.equal(['aaa']);
    browser.open('ccc');
    expect(browser.current).equal('ccc');
    expect(browser.history.list).deep.equal(['aaa', 'bbb']);
    expect(browser.future.list).deep.equal([]);
    expect(browser.backward()).equal('bbb');
    browser.open('ddd');
    expect(browser.forward()).equal('ddd');
    expect(browser.forward()).equal('ddd');
    expect(browser.backward()).equal('bbb');
    expect(browser.history.toString()).deep.equal('aaa');
    expect(browser.future.toString()).equal('ddd');
    expect(browser.backward()).equal('aaa');
    expect(browser.history.toString()).equal('');
    expect(browser.future.toString()).equal('ddd,bbb');
  });
});