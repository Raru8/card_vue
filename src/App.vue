<template>
  <user-login></user-login>
</template>

<script>
import UserLogin from "@/views/login/UserLogin.vue"

export default {
  name: 'App',
  components: {
    UserLogin
  },
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
