import Vue from 'vue'
import IsDateValid from '@/components/IsDateValid'

describe('IsDateValid.vue', () => {
    const Constructor = new Vue(IsDateValid);
    const vm = Constructor.$mount();

    it('should return true for vaild date', () => {
        let d = new Date('October 13, 2014 11:13:00');
        expect(vm.isDateValid(d)).to.be.true;
    });

    it('should return false for invaild date', () => {
        let d = new Date('foo');
        expect(vm.isDateValid(d)).to.be.false;
    });

    it('should return false for integer', () => {
        let d = 2;
        expect(vm.isDateValid(d)).to.be.false;
    });

    it('should return false for string', () => {
        let d = 'foo';
        expect(vm.isDateValid(d)).to.be.false;
    });

    it('should return false for object', () => {
        let d = { name: 'foo' };
        expect(vm.isDateValid(d)).to.be.false;
    });

    it('should return false for undefined', () => {
        let d = undefined;
        expect(vm.isDateValid(d)).to.be.false;
    });
});