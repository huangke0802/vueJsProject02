<template>
	<div>
		<a class="componentA" v-for="(item, i) in list">
			{{item}} -- {{i}}
		</a>

    <button @click='emitMyevent'>emitMyevent</button>
	</div>

</template>

<script>
export default {
  data() {
    return {
      list: [1, 3, 4, 5, 6],
      hello: "I am componentA"
    };
  },
  methods: {
    emitMyevent() {
      this.$emit("my-event", this.hello);
    }
  }
};
</script>

<style>
.componentA {
  color: blue;
}
</style>
