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
  <pre>{{ photos }}</pre>
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
    photos() {
      return this.$store.state.photos
    }
  },
  methods: {
    submitForm() {
      const { selectedCam, marsSun } = this
      this.$store.dispatch('queryPhotos', {marsSun, selectedCam})
    }
  },
  data() {
    return {
      marsSun: '0',
      selectedCam: this.$store.state.activeRover.cameras[0].name
    }
  }
}
</script>

<style scoped>
.query-box {
  margin-top: 30px;
  text-align: center;
  width: 100%;
}

.query-box form {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.query-box form .field {
  margin-right: 30px;
}

.query-box form input,
.query-box form select {
  padding: 5px 10px;
}

.query-box form button {
  background-color: #1e272e;
  border: none;
  color: white;
  padding: 5px 32px;
  text-align: center;
  font-size: 16px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.query-box form button:hover {
  opacity: 1;
}
</style>