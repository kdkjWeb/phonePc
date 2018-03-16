<template>
  <div>
    <div class="left">
        <div class="btnGroup">
        <button class="new" @click="newCreate()">修改</button>
        <button class="remove">删除</button>
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
          property="department"
          label="部门">
        </el-table-column>
        <el-table-column
          property="job"
          label="岗位">
        </el-table-column>
        <el-table-column
          property="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          property="phone"
          label="手机号">
        </el-table-column>
      </el-table> 
      <div class="pagation">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>

      </div>
    </div>
    <div class="right">
        <!-- 用户信息 -->
      <div class="info">
        <div class="title">用户信息</div>
       <div class="info_con">
            <el-form ref="form" label-width="80px">
                <el-form-item label="部门">
                    <el-select v-model="form.value" placeholder="请选择部门">
                        <el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="岗位">
                    <el-select v-model="form.value1" placeholder="请选择岗位">
                        <el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="姓名"  prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            <el-form-item label="手机号"  prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
            </el-form>
       </div>
      </div>

      <!-- 修改密码 --> 
      <div class="password">
          <div class="title">管理员修改密码</div>
      </div>
    </div>
  </div>
</template>
<script>
    export {default} from './informationCtr.js'
</script>
<style scoped>
  .left {
    flex: 6;
    height:100%;
    margin-right:20px;
    box-sizing: border-box;
    padding:20px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .btnGroup {
    width:40%;
    display: flex;
    justify-content: space-between;
  }
  .btnGroup button {
    width:100px;
    height:35px;
    color:white;
    text-align: center;
    line-height:35px;
    border-radius: 35px;
    outline: none;
    border:none;
    cursor: pointer;
  }
  .new {
    background-color: #4768f3;
  }
  .remove{
    background-color: #f29150;
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
      height: 55%;
      width: 100%;
      background: #fff;
      margin-bottom: 20px;
  }
  .right .password{
      height: 45%;
      width: 100%;
      background: #fff;
  }
  .title{
      text-align: center;
      color: #7883ff;
      padding: 20px;
  }
  .info_con{
      width: 70%;
      margin: 0 auto;
  }
</style>
