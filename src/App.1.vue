<template>
  <div :title="hello">
   <!--  {{ hello }}
    <p v-html="hello"></p>
    <p v-text="html"></p>

    <p v-for="item in list">{{item.name}} -- {{item.price}}</p>
    <h5 v-for = "item in list" v-text="item.name +'+' + item.price"></h5>
  	<ul>
  		<li v-for="(item, index) in list" :class="{odd: index%2}">
				{{item.name}} - {{item.price}} - {{index}}
  		</li>
  	</ul>
  	<ol>
  		<li v-for="(item, key) in objList">{{item}} + {{key}}</li>
  	</ol>

  	<h2 v-for="(item, key) in objList">
  			{{key}}
  			<tempA></tempA>
        <tempB></tempB>
  	</h2>
    <tempB v-for="(item, key) in objList"></tempB> -->

    <button v-on:click="addItem" class="btn" :class="[class1, {'red-big': classFlag}]">add item</button>

     <div v-if="classFlag">v-if</div>

     <div v-show="classFlag">v-show</div>
    <button @click = "changFlag">changFlag</button>
    <input type="text" @keydown.enter="onKeydown">
    <tempA @my-event="myEvent"></tempA>
    <div>
      <!-- <input type="number" v-model.number="inputVal">
      <p>{{inputVal}}</p>-->
      <!-- 多选 -->
      <input type="checkbox" name="front" value="apple" v-model="inputVal">
      <label for="">apple</label>
      <input type="checkbox" name="front" value="banana" v-model="inputVal">
      <label for="">banana</label>
      <input type="checkbox" name="front" value="orange" v-model="inputVal">
      <label for="">orange</label>
      <!-- 单选 -->
      <p>{{radio}}</p>
      <input type="radio" name="front" value="apple" v-model="radio">
      <label for="">apple</label>
      <input type="radio" name="front" value="banana" v-model="radio">
      <label for="">banana</label>
      <input type="radio" name="front" value="orange" v-model="radio">
      <label for="">orange</label>
      <br>
      <input type="text" v-model="textValue">
      <p>{{textValueWithoutNum}}</p>
      <p>{{myValueWithoutNum()}}</p>

    </div>
  </div>



</template>

<script>
//导入模块
import comA from "./components/a";
import comB from "./components/b";
import vue from "vue";
export default {
  //注册模块
  components: {
    tempA: comA,
    tempB: comB
  },
  data() {
    return {
      textValue : "",
      inputVal : ["banana"],
      radio : 'orange',
      class1: "btn-red",
      class2: "btn-green",
      classFlag: false,
      hello: "world",
      html: "<span>sss</span>",
      classList: ["btn-i", "btn-big"],
      classMap: {
        "btn-small": true,
        "btn-red": false
      },
      list: [
        {
          name: "apple",
          price: 34
        },
        {
          name: "banana",
          price: 54
        },
        {
          name: "orange",
          price: 90
        }
      ],
      objList: {
        name: "price",
        color: "red",
        weight: 120
      }
    };
  },
  //数据监听
  watch : {
    textValue : function(newVal, oldVal){
      console.log(newVal, oldVal);
    }
  },
  //计算属性
  computed : {
    textValueWithoutNum (){
      //Date.now() ：获取当前时间
      return this.textValue.replace(/\d/g, "");
    }
  },
  methods: {
    addItem() {
      /*      this.list.push({
       name : "english",
       price :1222
     }); */

      //这种不能重新渲染
      /*   this.list[1] = {
        name : "哈哈是我",
        price : 28
      } */

      vue.set(this.list, 1, {
        name: "哈哈是我",
        price: 28
      });
    },
    changFlag() {
      this.classFlag = !this.classFlag;
    },
    onKeydown() {
      console.log("on keydown");
    },
    myEvent(a) {
      console.log("myEvent " + a);
    },
    //跟计算属性textValueWithoutNum作用相同的方法
    myValueWithoutNum(){
      return this.textValue.replace(/\d/g, "");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

