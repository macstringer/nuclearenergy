<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/argument">The Argument</router-link> |
      <router-link to="/additionalResources">Additional Resources</router-link> |
      <router-link to="/about">About Project</router-link> |
      <router-link to="/methods">Methods</router-link> |
      <router-link to="/worksCited">Works Cited</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  padding-left: 4px;
  padding-right: 4px;
}

#nav a.router-link-exact-active {
  background-color: #2c3e50;
  border-radius: 2px;
  color: #faebd7;
}


</style>
