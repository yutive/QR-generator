<template>
  <div class="url_input">
    <input
        class="input"
        type="text"
        v-model="url"
        @keydown.enter="createQR(url)"
        placeholder="URL"
    />
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    methods: {
      createQR(url) {
        console.log(url)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 45%;
  padding: 6px 10px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>
