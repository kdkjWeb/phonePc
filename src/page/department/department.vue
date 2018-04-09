<template>
  <div>
    <div class="left">
      <div class="btnGroup">
        <button class="add"  @click="add">新增</button>
        <button class="new" @click="modify">修改</button>
        <button class="remove" @click="remove">删除</button>
      </div>

      <el-table class="table"
                ref="singleTable"
                :data="tableData"
                border
                highlight-current-row
                @current-change="handleCurrentChange"
                height="height"
                style="width: 100%">
        <el-table-column
          align="center"
          property="departName"
          label="部门">
        </el-table-column>
      </el-table>
      <div class="pagation">
        <el-pagination
          @current-change="changeCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>

      </div>
    </div>
    <div class="right">
      <!-- 用户信息 -->
      <div class="info">
        <div class="title">部门信息</div>
        <div class="info_con">
          <el-form ref="form" label-width="80px">
            <el-form-item label="部门名称" prop="name" size="small">
              <el-input placeholder="请输入部门名称" :disabled="disable" v-model="name"></el-input>
            </el-form-item>
            <el-form-item class="groupB">
              <el-button size="small" type="success" class="btn1" @click="save">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export {default} from './departmentCtr.js'
</script>
<style scoped>
  .left {
    flex: 4;
    height:100%;
    margin-right:20px;
    box-sizing: border-box;
    padding:20px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .btnGroup {
    display: flex;
    justify-content:flex-end;
  }
  .btnGroup button {
    width:70px;
    height:35px;
    color:white;
    text-align: center;
    line-height:35px;
    border-radius: 35px;
    outline: none;
    border:none;
    cursor: pointer;
    margin-left:20px;
  }
  .new {
    background-color: #4768f3;
  }
  .remove{
    background-color: #f29150;
  }
  .add {
    background-color: #4caf50;
  }
  .table {
    border-radius: 10px 10px 0 0;
    margin-top:20px;
  }
  .pagation {
    width:100%;
    text-align: center;
    padding:30px 0;
    border:1px solid #ebeef5;
    border-radius:0 0 10px 10px;
    box-sizing: border-box;
  }



  .right {
    flex: 5;
    height:100%;
    box-sizing: border-box;
  }
  .right .info{
    height:100%;
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    overflow: auto;
  }
  .title{
    text-align: center;
    color: #7883ff;
    padding: 20px;
    font-size: 16px;
  }
  .info_con,.pas_con{
    width: 60%;
    margin: 0 auto;
  }
  .btn{
    width: 80%;
    margin-left: calc(10% - 40px);
  }
  .input{
    width: 100%;
  }
  .groupB{
    width:100%;
    text-align: center;
    margin-left:-50px;
  }
  .el-table {
    cursor: pointer;
  }
</style>
