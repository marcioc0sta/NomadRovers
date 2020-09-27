<template>
  <div class="hero-unit" />
</template>

<script>
export default {
name: "HeroUnit"
}
</script>

<style scoped>
.hero-unit {
  background: url("../../assets/6037_msl_banner.jpg") 0 0 no-repeat;
  background-size: cover;
  height: 80vh;
  overflow: hidden;
  width: 100%;
}

.hero-unit:before {
  background: #1e272e;
  content: '';
  display: block;
  height: 80vh;
  position: absolute;
  opacity: .65;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>