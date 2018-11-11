<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><router-link to="/">Home</router-link></li>
      <li class="nav__item"><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="sass">
  .nav
    padding: 30px

    &__list
      list-style: none

    &__item
      font-weight: bold
      color: #2c3e50
</style>
