<template>
  <div id="app">

    <div class="routing-panel" id="auth-container">
      <p id="auth-paragraph">login</p>
    </div>

    <div id="routing-panel-container">
      <div id="creator-panel " class="routing-panel sized-routing-panel" @click="redirectTo('https://paredros-creator/')">
        <p class="routing-panel-paragraph">creator</p>
      </div>
      <div id="store-panel" class="routing-panel sized-routing-panel" @click="redirectTo('https://paredros-store/')">
        <p class="routing-panel-paragraph">store</p>
      </div>
      <div id="player-panel" class="routing-panel sized-routing-panel" @click="redirectTo('https://paredros-player/')">
        <p class="routing-panel-paragraph">player</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    redirectTo: function(url) {
      window.location.href = url
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#auth-container{
  position: absolute;
  top: 0;
  right: 0;

  margin: 10px;
}

#auth-paragraph{
  margin: 1em;
  font-size: 1.5em;
}

#routing-panel-container{
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  justify-items: center;
}

.sized-routing-panel{
  width: 20vw;
  height: 20vw;
  min-width: 200px;
  min-height: 200px;

  margin: 50px;
}

.routing-panel{
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid darkgrey;
  border-radius: 10%;

  background-color: #7eaacd;

  cursor: pointer;
}

.routing-panel:hover{
  background-color: #a3c2db;
}

.routing-panel:active{
  background-color: steelblue;
}

.routing-panel-paragraph{
  margin: 0;
  font-size: 2em;
  color: black;
}
</style>
