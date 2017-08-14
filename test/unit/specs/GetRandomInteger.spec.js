import Vue from 'vue'
import GetRandomInteger from '@/components/GetRandomInteger'

describe('GetRandomInteger.vue', () => {
    const Constructor = new Vue(GetRandomInteger);
    const vm = Constructor.$mount();

    it('should be a postive number in range of 0 - 10', () => {
        expect(vm.getRandomInteger(0, 10)).to.be.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should be zero', () => {
        expect(vm.getRandomInteger(0, 0)).to.equal(0);
    });

    it('should be a negative number in range of -10 to -1', () => {
        expect(vm.getRandomInteger(-10, -1)).to.oneOf([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
    });

    it('should be undefind when min is bigger than max', () => {
        expect(vm.getRandomInteger(10, -1)).to.be.undefined;
    });

    it('should be udefined when an input is String', () => {
        expect(vm.getRandomInteger(0, "foo")).to.be.undefined;
    });

    it('should be udefined when an input is object', () => {
        expect(vm.getRandomInteger(0, { id: 1 })).to.be.undefined;
    });

});