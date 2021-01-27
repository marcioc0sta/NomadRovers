<template>
  <pre>{{photos.status}}</pre>
  <div class="photos-wrapper" v-if="rovers.status === reqStatus.SUCCEEDED && photos.data.length >= 1">
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
          v-for="(photo, i) in photos.data"
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

  data() {
    return {
      photos: this.$store.state.photos,
      rovers: this.$store.state.rovers,
      reqStatus: requestStatus,
    }
  }
}
</script>

<style scoped>
.photos-wrapper {
  padding: 0 30px;
}
</style>