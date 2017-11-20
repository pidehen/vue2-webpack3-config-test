<template>
  <div>
    <div>{{ message }}</div>
    <span v-bind:title="title">鼠标悬停</span>
    <span v-if="seen">很帅</span>
    <ul>
      <li v-for="user in users">
        {{ user.text }}
      </li>
    </ul>
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

  */
  export default {
    data() {
      return {
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
