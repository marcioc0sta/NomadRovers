<template>
  <div v-if="rovers.status === reqStatus.SUCCEEDED && photos.length >= 1">
    <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        slide-multiple
        :arrows-outside="false"
        :gap="3"
        :slide-ratio="1 / 4"
        :touchable="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
      <vueper-slide
          v-for="(photo, i) in photos"
          :key="i"
          :image="photo.img_src"
          :link="photo.img_src"
      />
    </vueper-slides>
  </div>
</template>

<script>
import {useStore} from "vuex";
import requestStatus from '@/enum/requestStatus';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "Photos",
  store: useStore(),
  components: { VueperSlides, VueperSlide },
  computed: {
    photos() {
      return this.$store.state.photos
    }
  },
  data() {
    return {
      rovers: this.$store.state.rovers,
      reqStatus: requestStatus,
    }
  }
}
</script>

<style scoped>

</style>