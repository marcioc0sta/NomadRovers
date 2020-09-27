<template>
  <div class="hero-unit">
    <div class="rover">
      <Select id="hover" v-bind:options="rovers" />
    </div>
  </div>
</template>

<script>
import Select from "../select/Select.vue";

export default {
  name: "HeroUnit",
  components: {
    Select
  },
  data() {
    return {
      rovers: [
        { key: 'Curiosity', value: 'curiosity' },
        { key: 'Opportunity', value: 'opportunity' },
        { key: 'Spirit', value: 'spirit' },
      ]
    }
  }
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

.rover {
  background: rgba(255,255,255, .3);
  box-shadow: 0px 0px 10px #636364;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin: 10% auto 0;
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