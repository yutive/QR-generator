<template>
  <ul>
    <li><label for="generate">Generate</label><input type="radio" @change="onChange($event)" value="generate" name="menu_switch" id="generate"></li>
    <li><label for="read">Read</label><input type="radio" @change="onChange($event)" value="read" name="menu_switch" id="read"></li>
    <li><label for="about">About</label><input type="radio" @change="onChange($event)" value="about" name="menu_switch" id="about"></li>
  </ul>
</template>

<script>
  export default {
    name: "Navbar",
    data() {},
    methods: {
      onChange(event) {
        //let generate, read, about = false;
        let switch_data = event.target.value;
        console.log(switch_data);
        /*switch (switch_data) {
          case "generate":
            generate = true;
            break;
          case "read":
            read = true;
            break;
          case "about":
            about = true;
            break;
        }
        console.log(generate + read + about);
        */

      }
    }
}
</script>

<style scoped>
  ul {
    display: flex;
    list-style-type: none;
  }

  ul input {
    opacity: 0;
  }

  li {
    padding: 5px;
    background-color: #04aa6d;
    color: white;
    display: block;
  }
  li :hover {
    background-color: black;
  }

</style>