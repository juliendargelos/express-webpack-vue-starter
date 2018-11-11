<template>
  <main class="application">
    <Nav/>
    <router-view/>
  </main>
</template>

<script>
  import Nav from './components/Nav.vue'

  export default {
    name: 'Application',
    components: {
      Nav
    }
  }
</script>

<style lang="sass">
  .application
    font-family: sans-serif
    text-align: center
    color: #2c3e50
</style>
