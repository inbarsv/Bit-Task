 <template>
  <div>
    <h1>Test Component</h1>
    a
  </div>
</template>

<script>
export default {
  name: 'SortArrayByProperty',
  description: 'Sorts an object array by a property, including nested properties',
  methods: {
    sortObjectArray(obj, property) {
      obj.sort((a, b) => {

        if (this.getNestedProperty(a, property) < this.getNestedProperty(b, property))
          return -1;
        if (this.getNestedProperty(a, property) > this.getNestedProperty(b, property))
          return 1;
        return 0;
      });
    },

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
