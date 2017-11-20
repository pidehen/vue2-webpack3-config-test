<template>
  <div>
    <div>{{ message }}</div>
    <span :title="title" v-on:click="wjj">鼠标悬停</span>
    <span v-if="seen">很帅</span>
    <ul>
      <li v-for="user in users">
        {{ user.text }}
      </li>
    </ul>
    <h3>{{ name }}</h3>
    <button v-on:click="reverseName">反转名称</button>
    <p style="color: red">{{ sx }}</p>
    <input placeholder="haha" v-model="sx" />
  </div>
</template>
<script>
  /*
    通过指令（特殊的html属性）渲染数据

    绑定值：{{key}} -- 绑定值到文本节点；v-bind:htmlProperty=key 绑定值到属性节点
    {{}} 将数据和dom绑定一起

    条件结构：
      v-if="key"

    循环结构：
      v-for="keyAlias in key"

    处理用户输入(绑定事件)：
      v-on:eventName="methodName"

    双向绑定
      v-model="key"

    vue工作原理：
      当vue实例被创建后，其响应系统会对data对象里的所有属性进行监听，当这些属性的值发生了变化，视图也会产生变化


  */
  export default {
    methods: {

      wjj() {
        alert(this.$route.params.id);
      },

      reverseName() {
        this.name = this.name.split('').reverse().join('');
      }
    },

    data() {
      return {
        sx: '',
        name: '省港澳第一杰西',
        message: '很捞',
        title: '有始有终',
        seen: false,
        users: [
          {
            text: 'haha'
          }, {
            text: 'mlgd'
          }
        ]
      };
    }
  }
</script>
