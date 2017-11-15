## Vue

### 知识点

```text

1. 动态路径参数(/users/:id)，在组件方法中可以使用this.$route.params.id获取

2. 当两次渲染同一个组件时候，组件的声明周期函数(销毁、创建)不会执行

3. 两次渲染同一个组件时候，调用路由变化，会调用beforeRouteUpdate，参数下一个route对象

4. 命名路由

5. 命名视图

```

### 经验

* 每个vue文件都需要导出一个Vue.extend()的组件，或者是一个组件描述配置(包含组件属性性和方法的对象)

* 组件的data必须是一个方法

* 每个vue文件中的template里必须有一个根元素

* $route里存在path就会忽略params
