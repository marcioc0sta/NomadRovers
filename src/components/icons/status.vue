<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 32 40" x="0px" y="0px">
    <g>
      <path :fill="fill" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,1.63A14.37,14.37,0,0,1,30.33,15.19H23.09l-3.73,7.46L12.85,5.29,7.9,15.19H1.67A14.37,14.37,0,0,1,16,1.63Zm0,28.74A14.37,14.37,0,0,1,1.67,16.81H8.91l3.73-7.46,6.51,17.36,5-9.9h6.23A14.37,14.37,0,0,1,16,30.37Z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: "Status",
  props: {
    fill: String,
    size: Number
  }
}
</script>