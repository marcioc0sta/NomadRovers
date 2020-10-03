<template>
  <div class="select">
    <label :for="id">
      <select v-model="selected" @change="onChange($event)" :name="id" :id="id">
        <option value="" disabled selected>Select a rover</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.key }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "Select",
  store: useStore(),
  props: {
    id: String,
    options: {
      type: Array
    },
  },
  methods: {
    onChange(e) {
      const roverID = e.target.value
      this.$store.dispatch('setActive', roverID)
    }
  },
  data() {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>
  select {
    appearance: none;
    border-radius: 4px;
    color: #1e272e;
    font-size:18px;
    height:48px;
    outline: none;
    padding: 10px;
    width: 100%;
  }

  .select{
    display: inline-block;
    position: relative;
    width: 50%;
  }

  .select:after {
    background-color: #1e272e;
    content: "";
    display: block;
    clip-path: polygon(100% 0%, 0 0%, 50% 50%);
    height: 10px;
    position: absolute;
    right: 5%;
    top: 45%;
    width: 10px;
  }
</style>