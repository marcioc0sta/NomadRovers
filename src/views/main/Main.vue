<template>
  <Header />
  <HeroUnit />
  <RoverData />
  <Photos />
</template>

<script>
import Header from '../../components/header/Header.vue'
import HeroUnit from '../../components/hero-unit/HeroUnit.vue'
import RoverData from '../../components/rover-data/RoverData.vue'
import Photos from '../../components/photos/Photos.vue'

export default {
  name: 'Main',
  components: {
    Header,
    HeroUnit,
    RoverData,
    Photos,
  },
}
</script>
