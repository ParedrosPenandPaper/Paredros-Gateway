<template>
  <div id="app">

    <div id="title">
      <label id="welcome-label">Welcome to <label id="project-label">Project</label></label>
      <label id="paredros-label">Paredros</label>
    </div>

    <div id="reg-auth-container">
      <div class="routing-panel reg-auth-container" @click="redirectTo('http://it-projekt19-6.informatik.fh-nuernberg.de/login')">
        <p class="reg-auth-paragraph">register</p>
      </div>

      <div class="routing-panel reg-auth-container" @click="redirectTo('http://it-projekt19-6.informatik.fh-nuernberg.de/register')">
        <p class="reg-auth-paragraph">login</p>
      </div>
    </div>

    <div id="routing-panel-container">
      <div id="creator-panel " class="routing-panel sized-routing-panel" @click="redirectTo('http://it-projekt19-6.informatik.fh-nuernberg.de/creator')">
        <p class="routing-panel-paragraph">creator</p>
      </div>
      <div id="store-panel" class="routing-panel sized-routing-panel" @click="redirectTo('http://it-projekt19-6.informatik.fh-nuernberg.de/store')">
        <p class="routing-panel-paragraph">store</p>
      </div>
      <div id="player-panel" class="routing-panel sized-routing-panel" @click="redirectTo('http://it-projekt19-6.informatik.fh-nuernberg.de/player')">
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

  background-image: radial-gradient(white, white, #f2f2f2);
}

#title{
  width: 100%;
  height: 30%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

#welcome-label{
  font-size: 2em;
}

#project-label{
  font-size: 2.5em;
}

#paredros-label{
  font-size: 7em;
}

#reg-auth-container{
  position: absolute;
  top: 0;
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-content: flex-end;
}

#routing-panel-container{
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  justify-items: center;
}

.reg-auth-container{
  margin: 2vw 2vw 2vw 0;
  
  border-radius: 0.5em !important;
}

.reg-auth-paragraph{
  margin: 1vh 1vw;
  font-size: 1.5em;
}

.sized-routing-panel{
  width: 10vw;
  height: 10vw;
  min-width: 100px;
  min-height: 100px;

  margin: 50px;
}

.routing-panel{
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
  border: 2px solid #d9d9d9;
  border-radius: 1vw;

  cursor: pointer;
}

.routing-panel:hover{
  background-image: radial-gradient(#c8daea, #6c9dc6);
  border-color: #6c9dc6;
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
