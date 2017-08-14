import Vue from 'vue'
import GetNestedProperty from '@/components/GetNestedProperty'

describe('GetNestedProperty.vue', () => {
    const Constructor = new Vue(GetNestedProperty);
    const vm = Constructor.$mount();

    it('should return the value of the property', () => {
        let obj = { name: 'Inbar' };
        expect(vm.getNestedProperty(obj, 'name')).to.equal('Inbar');
    });

    it('should return the value of the nested property', () => {
        let obj = { name: { first_name: 'Inbar', last_name: 'Svarzenberg' }, age: 23 };
        expect(vm.getNestedProperty(obj, 'name.first_name')).to.equal('Inbar');
    });


    it('should return undefind for a property that does not exist', () => {
        let obj = { name: { first_name: 'Inbar', last_name: 'Svarzenberg' }, age: 23 };
        expect(vm.getNestedProperty(obj, 'job')).to.be.undefined;
    });


    it('should return undefind for a nested property that does not exist', () => {
        let obj = { name: { first_name: 'Inbar', last_name: 'Svarzenberg' }, age: 23 };
        expect(vm.getNestedProperty(obj, 'age.days')).to.be.undefined;
    });

    it('should return undefind for a nested property of a property that does not exist', () => {
        let obj = { name: { first_name: 'Inbar', last_name: 'Svarzenberg' }, age: 23 };
        expect(vm.getNestedProperty(obj, 'job.title')).to.be.undefined;
    });

    it('should return undefind for undefined object', () => {
        let obj = undefined;
        expect(vm.getNestedProperty(obj, 'name')).to.be.undefined;
    });

    it('should return undefind for undefined property', () => {
        let obj = { name: { first_name: 'Inbar', last_name: 'Svarzenberg' }, age: 23 };
        expect(vm.getNestedProperty(obj, undefined)).to.be.undefined;
    });

    it('should return undefind when object is integer', () => {
        let obj = 2;
        expect(vm.getNestedProperty(obj, 'name')).to.be.undefined;
    });

    it('should return undefind when object is string', () => {
        let obj = 'foo';
        expect(vm.getNestedProperty(obj, 'name')).to.be.undefined;
    });

    it('should return undefind when property is integer', () => {
        let obj = { name: { first_name: 'Inbar', last_name: 'Svarzenberg' }, age: 23 };
        expect(vm.getNestedProperty(obj, 2)).to.be.undefined;
    });

});