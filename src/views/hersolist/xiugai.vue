<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.name"
          id="txtName"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- prevent 阻止默认行为的执行 -->
      <button @click.prevent="Gai" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  /// 接收外部传递的参数
  props: ['id'],
  data () {
    return {
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  // 挂载
  mounted () {
    this.loadDataById()
  },
  methods: {
    loadDataById () {
      this.axios
        .get(`http://localhost:3000/users/${this.id}`)
        .then((res) => {
          const { status, data } = res
          if (status === 200) {
            // 存储数据到formData
            this.formData = data
          }
        })
    },
    // 修改数据
    Gai () {
      this.axios
        .put(`http://localhost:3000/users/${this.id}`, this.formData)
        .then((res) => {
          const { status } = res
          if (status === 200) {
            this.$router.push({ name: 'ying' })
          } else {
            alert('修改失败')
          }
        })
    }
  }
}
</script>

<style>
</style>
