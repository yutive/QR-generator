<template>
  <ul>
    <li>
      <label for="generate">
            Generate
      </label>
      <input type="radio"
             @change="onChange($event)"
             value="generate"
             name="menu_switch"
             id="generate">
    </li>
    <li>
      <label for="read">
        Read
      </label>
      <input
          type="radio"
          @change="onChange($event)"
          value="read" name="menu_switch"
          id="read">
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
    name: "Navbar",
    methods: {
      onChange(event) {
        let generate = false;
        let read = false;
        let about = false;
        let switch_data = event.target.value;
        console.log(switch_data);
        switch (switch_data) {
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
        console.log(generate);
        console.log(read);
        console.log(about);


      }
    }
}
</script>

<style scoped>
  ul {
    display: flex;
    list-style-type: none;
  }


  li {
    padding: 5px;
    background-color: #04aa6d;
    color: white;
    display: block;
    text-align: center;
    height: 20px;
  }

  label {
    display: block;
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