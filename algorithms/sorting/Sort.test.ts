import Sort from './Sort';
import {expect} from 'chai';

describe('Sort', () => {
  it('should throw an error when trying to call Sort.sort() method directly', () => {
    function doForbiddenSort() {
      const sorter = new Sort();
      sorter.sort();
    }

    expect(doForbiddenSort).to.throw();
  });
});