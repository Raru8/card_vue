<template>
  <UserHome />
</template>

<script>
import UserHome from '@/views/UserHome'

export default {
  name: 'App',
  components: {
    UserHome
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
}
</style>
