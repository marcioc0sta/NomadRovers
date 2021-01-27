<template>
  <div class="wrapper">
    <Header />
    <HeroUnit />
    <RoverData />
    <Photos />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import HeroUnit from '../../components/hero-unit/HeroUnit.vue'
import RoverData from '../../components/rover-data/RoverData.vue'
import Photos from '../../components/photos/Photos.vue'
import Footer from '../../components/footer/Footer.vue'

export default {
  name: 'Main',
  components: {
    Header,
    HeroUnit,
    RoverData,
    Photos,
    Footer,
  },
}
</script>

<style scoped>
  .wrapper {
    height: 100vh;
    position: relative;
  }
</style>