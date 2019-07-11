<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value,index) in list" :key="value.index">
            <td>{{index+1}}</td>
            <td>{{value.name}}</td>
            <td>{{value.gender}}</td>
            <td>
              <a href="edit.html">编辑</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      axios.get('http://localhost:3000/users')
        .then((res) => {
          const { status, data } = res
          if (status === 200) {
            this.list = data
          }
        })
    }

  }
}
</script>

<style>
</style>
