<template>
<div class="query-box">
  <h2>Query for mars photos</h2>
  <hr>
  <form>
    <div class="field">
      <label for="sun">
        Mars Sun
      </label>
      <input placeholder="0" :max='rover.max_sol' min="0" id="sun" type="number">
    </div>
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
    }
  },
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