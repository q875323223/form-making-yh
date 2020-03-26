<template>
  <fm-making-form  preview generate-code generate-json>
    <template slot="action" slot-scope="scope">
      <el-button type="text" size="medium" icon="el-icon-document" @click="testfunction(scope)">查询</el-button>
    </template>
  </fm-making-form>
</template>

<script>
export default {

  methods:{
    testfunction(scope){
      console.log(scope.model);
    }
  }
}
</script>
