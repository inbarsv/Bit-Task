import Vue from 'vue'
import CapitalizeString from '@/components/CapitalizeString'

describe('CapitalizeString.vue', () => {
    const Constructor = new Vue(CapitalizeString);
    const vm = Constructor.$mount();

    it('should remain a capitalized string', () => {
        expect(vm.capitalizeString('Inbar')).to.equal('Inbar');
    });

    it('should convert to a capitalized string', () => {
        expect(vm.capitalizeString('inbar')).to.equal('Inbar');
    });

    it('should be undefined for an no input', () => {
        expect(vm.capitalizeString()).to.be.undefined;
    });

    it('should remain the same for a string that starts with a number', () => {
        expect(vm.capitalizeString('1inbar')).to.equal('1inbar');
    });

    it('should be undefined for undefined input', () => {
        expect(vm.capitalizeString(undefined)).to.be.undefined;
    });
});