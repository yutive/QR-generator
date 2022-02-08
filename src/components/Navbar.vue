<template>
  <ul>
    <li>
      <button @click="$emit('change', 'generate')">Generate</button>
    </li>
    <li>

      <button @click="$emit('change', 'read')">Read</button>
    </li>
    <li>
      <label for="about">
        About
      </label>
      <input
          type="radio"
          @change="onChange($event)"
          value="about"
          name="menu_switch"
          id="about">
    </li>
  </ul>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
  ul {
    display: flex;
    list-style-type: none;
  }

  button  {
    border: none;
    cursor: pointer;
    background: #04aa6d none;
    color: white;
    padding: 7px 10px;
    margin: 4px 0;
    width: auto;
  }
  li:hover:not(input){
    opacity: 0.8;

  }

  ul input {
    opacity: 0;
    width: 0;
    margin: 0;
    border: 0;
    height: 0;
  }

</style>