<template>
  <Header />
  <HeroUnit />
</template>

<script>
import Header from '../../components/header/Header.vue'
import HeroUnit from '../../components/hero-unit/HeroUnit.vue'

export default {
  name: 'Main',
  components: {
    Header,
    HeroUnit,
  },
}
</script>
