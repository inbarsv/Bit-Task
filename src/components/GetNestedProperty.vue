<template>
    <div>
        <h1>Test Component</h1>
    
    </div>
</template>

<script>
export default {
    name: 'GetNestedProperty',
    description: 'Returns value of a given property, including nested properties',
    methods: {
        getNestedProperty(obj, property) {
            if (obj === undefined || typeof property !== 'string') return undefined;
            let arr = property.split('.');
            while (arr.length && (obj = obj[arr.shift()]));
            return obj;
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-weight: normal;
}
</style>
