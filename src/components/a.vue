<template>
	<div>
		<a class="componentA" v-for="(item, i) in list" :title="myNum">
			{{item}} -- {{i}}---{{myNum}} ;{{myName}}
		</a>

    <button @click='emitMyevent'>emitMyevent</button>
    <slot><p>黄克在吗</p></slot>
    <slot name="slot-header">no slot-header</slot>
    <slot name="slot-middle">no slot-middle</slot>
    <slot name="slot-footer">no slot-footer</slot>
	</div>

</template>

<script>
export default {
 /*  props : ["my-num"], */
  //props 可以接收数组，也可以接收对象，对象就可以定义接收的类型
   props : {
    "my-num" : [String, Number],
    "myName" :String
  },
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
