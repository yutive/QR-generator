<template>
  <div>
    <div class="about-section">
      <h1>About Us</h1>
      <p>Dies ist unser Winter Codeweek Projekt</p>
      <p>Unser Projekt könnt ihr hier verfolgen <a href="https://github.com/yutive/QR-generator" target="_blank">Github Repository</a></p>
    </div>

    <h2 style="text-align:center">Our Team</h2>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Laurin</h2>
            <p class="title">Programmer</p>
            <p><a href="https://github.com/yutive" target="_blank"><button class="button">Github</button></a></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Yannis</h2>
            <p class="title">Programmer</p>
            <p><a href="https://github.com/yanniskuenzler" target="_blank"><button class="button">Github</button></a></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Lorenz</h2>
            <p class="title">Programmer</p>
            <p><a href="https://github.com/Lorenzmueller2" target="_blank"><button class="button">Github</button></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

h2{
  padding-top: 15px;
}

a:link {
  color: #F29559;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: #F29559;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: #f2b576 ;
  background-color: transparent;
  text-decoration: underline;
}

a:visited {
  color: #F29559;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: #f2b576 ;
  background-color: transparent;
  text-decoration: underline;
}

.column {
  float: left;
  width: 33.3%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.darkMode .about-section {
  padding: 50px;
  text-align: center;
  background-color: #aaaaaa;
  color: #474747;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  border-radius: 25px;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>