<template>
<div class="query-box">
  <h2>Query for mars photos</h2>
  <hr>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label for="sun">
        Mars Sun
      </label>
      <input
          v-model="marsSun"
          placeholder="0"
          :max='rover.max_sol'
          min="0" id="sun" type="number"
      />
    </div>
    <div class="field">
      <label for="sun">
        Select an Camera
      </label>
      <select v-model="selectedCam" name="camSelect" id="camSelect">
        <option value="" disabled selected>Select a camera</option>
        <option v-for="cam in rover.cameras" :key="cam.name" :value="cam.name">
          {{ cam.full_name }}
        </option>
      </select>
    </div>
    <button type="submit">Query Photos</button>
  </form>
</div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "Query",
  store: useStore(),
  computed: {
    rover() {
      return this.$store.state.activeRover
    },
  },
  methods: {
    submitForm() {
      const { selectedCam, marsSun } = this
      console.log(selectedCam.toLowerCase())
      console.log(marsSun)
    }
  },
  data() {
    return {
      marsSun: '0',
      selectedCam: ''
    }
  }
}
</script>

<style scoped>
.query-box {
  margin-top: 30px;
  text-align: left;
  width: 100%;
}

.query-box form {
  margin-top: 15px;
}
</style>