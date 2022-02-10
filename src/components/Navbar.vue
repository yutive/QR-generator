<template>
  <div class = "burger">
    <ul>
      <li>
        <img src="../assets/menu.png" alt="Burger symbol">
      </li>
      <li>
        <button @click="$emit('change', 'generate')" id="left">Generate</button>
      </li>
      <li>
        <button @click="$emit('change', 'read')">Read</button>
      </li>
      <li>
        <button @click="$emit('change', 'about')" id="right">About</button>
      </li>
      <li>
        <button id="darkMode">DarkMode</button>
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

.burger img{
  width: 7vh ;
  height: 7vh;
  display: none;
}

  ul {
    display: flex;
    list-style-type: none;
    padding-left: 0;
    flex-flow: row wrap;
    justify-content: flex-end;
    margin: 0;
    background-color: #f29559;
  }
  button  {
    border: none;
    cursor: pointer;
    background: #f29559;
    color: white;
    padding: 7px 10px;
    margin: 4px 0;
    width: 90px;
    font-size: 18px;
  }
  button:hover {
    background-color: #F2A568;
  }

  #darkMode {
    margin-right: 20px;
  }

@media (max-width: 800px) {
  ul {
    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    width: 7vh ;
    height: 7vh;
  }
  button {
    padding: 2vw;
    margin: 0;
    display: none;
    width: 40vw;
  }
  .burger img {
    display: inline-flex;
    color: #f29559;
  }
  .burger:hover  button{
    display: block;
    position: relative;
  }
  .burger {
    width: 7vh ;
    height: 7vh;
    position:fixed;
  }
}

</style>