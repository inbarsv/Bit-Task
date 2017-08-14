<template>
    <div>
        <h1>Test Component</h1>
    </div>
</template>

<script>
export default {
    name: 'CapitalizeString',
    methods: {
        capitalizeString(string) {
            if (!string) {
                return undefined;
            }
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    },
}


   // sortObjectArray(obj

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-weight: normal;
}
</style>
