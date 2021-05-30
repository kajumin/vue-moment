<template>
  <div class="user-list">
    <ul>
      <li v-for="list in userList" :key="list.id">
        <div>
          <span>姓名：</span>  {{ list.name }}
        </div>
        <div><span>出生日期：</span>{{ list.birthday|format }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          id: 1,
          name: '张三',
          birthday: 1601244512
        },
        {
          id: 2,
          name: '李四',
          birthday: 1601244512
        },
        {
          id: 3,
          name: '王五',
          birthday: 1601244512
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.user-list {
  width: 1000px;
  margin: 0 auto;
  min-height: 400px;
  background-color: #f1f1f1;
}

</style>
