<template>
  <div v-if="Object.entries(rover).length > 0" class="rover-data">
    <section>
      <Rocket :size="80" fill="#000" />
      <div>
        <h2>Launch Date</h2>
        <p>{{ rover.launch_date }}</p>
      </div>
    </section>
    <section>
      <Arrival :size="60" fill="#000" />
      <div>
        <h2>Landing Date</h2>
        <p>{{ rover.landing_date }}</p>
      </div>
    </section>
  </div>
  <div>
    <code>{{ rover }}</code>
  </div>
</template>

<script>
import  Rocket from '../../components/icons/rocket.vue'
import Arrival from '../../components/icons/arrival.vue';
import {useStore} from "vuex";

export default {
  name: "RoverData",
  components: {
    Arrival,
    Rocket
  },
  store: useStore(),
  computed: {
    rover() {
      return this.$store.state.activeRover
    }
  },
}
</script>

<style scoped>
  .rover-data {
    display: flex;
    justify-content: space-around;
    padding: 30px 60px;
  }
  section {
    align-items: center;
    display: flex;
    text-align: left;
  }
  section svg {
    margin-right: 10px;
  }
</style>