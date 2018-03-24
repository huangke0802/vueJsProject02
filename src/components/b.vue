<template>
  <div :class="cc">
    {{name}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "componentB",
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

