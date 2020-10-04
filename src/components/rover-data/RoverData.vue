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
    <section>
      <Status :size="60" fill="#000" />
      <div>
        <h2>Mission Status</h2>
        <p>{{ rover.status }}</p>
      </div>
    </section>
    <section>
      <Sun :size="60" fill="#000" />
      <div>
        <h2>Mars Suns</h2>
        <p>{{ rover.max_sol }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import  Rocket from '../../components/icons/rocket.vue'
import Arrival from '../../components/icons/arrival.vue';
import Status from '../../components/icons/status.vue';
import Sun from '../../components/icons/sun.vue';
import {useStore} from "vuex";

export default {
  name: "RoverData",
  components: {
    Arrival,
    Rocket,
    Status,
    Sun
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