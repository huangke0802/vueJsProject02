<template>
  <div :class="cc">
    {{name}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "我是 componentB",
      cc: "comb"
    };
  }
};
</script>
<style>
.comb {
  color: red;
}
</style>

