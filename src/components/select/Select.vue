<template>
  <div class="select">
    <select :name="id" :id="id">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.key }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    id: String,
    options: {
      type: Array
    },
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