om<template>
  <div>
    <h1>Test Component</h1>
  
  </div>
</template>

<script>
export default {
  name: 'GetRandomInteger',
  methods: {
    getRandomInteger(min, max) {
      return max >= min ? Math.floor(Math.random() * (max - min + 1)) + min : undefined;
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
