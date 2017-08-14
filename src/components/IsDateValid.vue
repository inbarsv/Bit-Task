<template>
    <div>
        <h1>Test Component</h1>
    
    </div>
</template>

<script>
export default {
    name: 'IsDateValid',
    description: 'Checks if the input is of type "Date" and if its value is valid',
    methods: {
        isDateValid(date) {
            if (Object.prototype.toString.call(date) === '[object Date]') {
                if (isNaN(date.getTime()))
                    return false;
                else
                    return true;
            }
            return false;
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
