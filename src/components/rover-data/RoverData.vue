<template>
  <div class="rover-data">
    <section>
      <Rocket :size="80" fill="#000" />
      <div>
        <h2>Lauch Date</h2>
        {{ rovers }}
      </div>
    </section>
  </div>
</template>

<script>
import  Rocket from '../../components/icons/rocket.vue'
import {useStore} from "vuex";

export default {
  name: "RoverData",
  components: {
    Rocket
  },
  store: useStore(),
  computed: {
    rovers() {
      console.log(this.$store.state)
      return this.$store.state.activeRover
    }
  },
}
</script>

<style scoped>
  .rover-data {
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;
  }
  section {
    display: flex;
  }
</style>