<template>
  <header>
    <Logo :size="30" fill="white"/>
    <h1 class="title">Mars Rovers</h1>
  </header>
</template>

<script>
import Logo from '../../components/icons/logo.vue'
export default {
  name:'Header',
  components: {
    Logo
  }
}
</script>

<style scoped>
  header {
    align-items: center;
    background: #1e272e;
    box-shadow: 3px 3px 6px #d2dae2;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  .title {
    color: white;
    margin-left: 10px;
  }
</style>
