<template>
  <div class="hero-unit">
    <div class="rover">
      <Select id="hover" :options="rovers" />
    </div>
  </div>
</template>

<script>
import Select from "../select/Select.vue";
import {useStore} from "vuex";

export default {
  name: "HeroUnit",
  components: {
    Select
  },
  store: useStore(),
  computed: {
    status() {
      return this.$store.state.rovers.status
    },
    rovers() {
      return this.$store.getters.parsedRovers
    }
  },
  mounted() {
    this.$store.dispatch('setRovers')
  }
}
</script>

<style scoped>
.hero-unit {
  background: url("../../assets/6037_msl_banner.jpg") center -120px no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.rover {
  background: rgba(255,255,255, .3);
  box-shadow: 0 0 10px #636364;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2% auto;
  padding: 30px;
  position: relative;
  width: 50%;
  z-index: 20;
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