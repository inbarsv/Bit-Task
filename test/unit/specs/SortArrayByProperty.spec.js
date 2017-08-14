import Vue from 'vue'
import SortArrayByProperty from '@/components/SortArrayByProperty'

describe('SortArrayByProperty.vue', () => {
  const Constructor = new Vue(SortArrayByProperty);
  const vm = Constructor.$mount();

  it('should sort by number', () => {
    let dataObj = testData();
    let expectedResult = [
      { name: { first_name: 'Yael', last_name: 'Gob' }, age: 34, username: 'yael_g' },
      { name: { first_name: 'Coral', last_name: 'Bit' }, age: 40, username: 'coralcoral' },
      { name: { first_name: 'Avi', last_name: 'Zuk' }, age: 52, username: 'avi86' }];
    expect(dataObj).to.not.have.deep.ordered.members(expectedResult);
    vm.sortObjectArray(dataObj, 'age');
    expect(dataObj).to.have.deep.ordered.members(expectedResult);
  });

  it('should sort by string', () => {
    let dataObj = testData();
    let expectedResult = [
      { name: { first_name: 'Avi', last_name: 'Zuk' }, age: 52, username: 'avi86' },
      { name: { first_name: 'Coral', last_name: 'Bit' }, age: 40, username: 'coralcoral' },
      { name: { first_name: 'Yael', last_name: 'Gob' }, age: 34, username: 'yael_g' }];
    expect(dataObj).to.not.have.deep.ordered.members(expectedResult);
    vm.sortObjectArray(dataObj, 'username');
    expect(dataObj).to.have.deep.ordered.members(expectedResult);
  });

  it('should sort by a nested property', () => {
    let dataObj = testData();
    let expectedResult = [
      { name: { first_name: 'Avi', last_name: 'Zuk' }, age: 52, username: 'avi86' },
      { name: { first_name: 'Coral', last_name: 'Bit' }, age: 40, username: 'coralcoral' },
      { name: { first_name: 'Yael', last_name: 'Gob' }, age: 34, username: 'yael_g' }];
    expect(dataObj).to.not.have.deep.ordered.members(expectedResult);
    vm.sortObjectArray(dataObj, 'name.first_name');
    expect(dataObj).to.have.deep.ordered.members(expectedResult);
  });

  it('should remain the same for a property that does not exist', () => {
    let dataObj = testData();
    let expectedResult = [{ name: { first_name: 'Avi', last_name: 'Zuk' }, age: 52, username: 'avi86' },
    { name: { first_name: 'Yael', last_name: 'Gob' }, age: 34, username: 'yael_g' },
    { name: { first_name: 'Coral', last_name: 'Bit' }, age: 40, username: 'coralcoral' }];
    expect(dataObj).to.have.deep.ordered.members(expectedResult);
    vm.sortObjectArray(dataObj, 'job');
    expect(dataObj).to.have.deep.ordered.members(expectedResult);
  });

  it('should remain the same for an undefined property', () => {
    let dataObj = testData();
    let expectedResult = [{ name: { first_name: 'Avi', last_name: 'Zuk' }, age: 52, username: 'avi86' },
    { name: { first_name: 'Yael', last_name: 'Gob' }, age: 34, username: 'yael_g' },
    { name: { first_name: 'Coral', last_name: 'Bit' }, age: 40, username: 'coralcoral' }];
    expect(dataObj).to.have.deep.ordered.members(expectedResult);
    vm.sortObjectArray(dataObj, undefined);
    expect(dataObj).to.have.deep.ordered.members(expectedResult);
  });
})

function testData() {
  return [{ name: { first_name: 'Avi', last_name: 'Zuk' }, age: 52, username: 'avi86' },
  { name: { first_name: 'Yael', last_name: 'Gob' }, age: 34, username: 'yael_g' },
  { name: { first_name: 'Coral', last_name: 'Bit' }, age: 40, username: 'coralcoral' }];
}