<template>
  <div class="no-photos-wrapper" v-if="photos.status === reqStatus.NO_DATA">
    <p>I still haven't found what i'm looking for :(</p>
  </div>
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

.no-photos-wrapper {
  align-content: center;
  background: url("../../assets/walle.gif") center 20% no-repeat;
  background-size: cover;
  display: flex;
  height: 300px;
  justify-content: center;
  margin: 0 auto 60px;
  width: 55%;
}

.no-photos-wrapper p {
  align-self: center;
  display: inline-flex;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 1px 1px 1px #1e272e;
}

</style>