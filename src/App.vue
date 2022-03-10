<template>
  <div id="app">
    <div id="geolocation">
      <div v-if="errorStr">
        Sorry, but the following error
        occurred: {{errorStr}}
      </div>

      <div v-if="gettingLocation">
        <i>Getting your location...</i>
      </div>

      <div v-if="location">
        Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      location: null,
      gettingLocation: false,
      errorStr: null
    }
  },
  created () {
    if (!('geolocation' in navigator)) {
      this.errorStr = 'Geolocation is not available.'
    }
    this.gettingLocation = true
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false
      this.location = pos
    }, err => {
      this.gettingLocation = false
      this.errorStr = err.message
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
