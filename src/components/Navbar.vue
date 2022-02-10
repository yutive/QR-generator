<template>
  <div>
    <ul>
      <li>
        <button @click="$emit('change', 'generate')" id="left">Generate</button>
      </li>
      <li>
        <button @click="$emit('change', 'read')">Read</button>
      </li>
      <li>
        <button @click="$emit('change', 'about')" id="right">About</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

  #right {
    border-radius: 0px 25px 25px 0px;
  }

  #left{
    border-radius:25px 0px 0px 25px;
  }

  ul {
    display: flex;
    list-style-type: none;
    padding-left: 0;
  }

  button  {
    border: none;
    cursor: pointer;
    background: #f29559;
    color: white;
    padding: 7px 10px;
    margin: 4px 0;
    width: 70px;
  }
  button:hover {
    background-color: #F2A568;
  }


  ul {
    justify-content: center;
  }

</style>