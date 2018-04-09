<template>
  <div>
    <div class="left">
        <div class="btnGroup">
          <div class="flex1Header">
            <div class="inputRow">
              <div class="input">
                <i class="iconfont icon-search_icon"></i>
                <input type="text" v-model="searchV" placeholder="请输入搜索信息">
              </div>
              <button class="search" @click="search">查询</button>
            </div>
            <div class="radio">
              <el-radio v-model="radio" label="department">部门</el-radio>
              <el-radio v-model="radio" label="username">姓名</el-radio>
              <el-radio v-model="radio" label="phone">电话</el-radio>
            </div>
          </div>
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
          property="department"
          label="部门">
        </el-table-column>
        <el-table-column
          property="typeName"
          label="岗位">
        </el-table-column>
        <el-table-column
          property="username"
          label="姓名">
        </el-table-column>
        <el-table-column
          property="phone"
          label="手机号">
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
        <div class="title">用户信息</div>
       <div class="info_con">
            <el-form ref="form" label-width="55px">
                <el-form-item label="部门" size="small">
                    <el-select v-model="form.departmentV" :disabled="disable" placeholder="请选择部门" class="input">
                        <el-option v-for="item,index in form.department" :key="index" :label="item.departName" :value="item.departId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="岗位" size="small">
                    <el-select v-model="form.typeV" :disabled="disable" placeholder="请选择岗位" class="input">
                        <el-option v-for="item in form.type" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="姓名" prop="name" size="small">
                    <el-input placeholder="请输入姓名" :disabled="disable" v-model="form.name"></el-input>
                </el-form-item>
            <el-form-item label="手机号"  prop="phone" size="small">
                    <el-input placeholder="请输入手机号" :disabled="disable" v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item class="groupB">
                    <el-button size="small" type="success" class="btn1" @click="save">保存</el-button>
                    <el-button type="warning" size="small" class="btn1" @click="rePwd">重置密码</el-button>
                </el-form-item>
            </el-form>
       </div>
      </div>

      <!-- 修改密码 -->
      <div class="password">
          <div class="title">管理员修改密码</div>
          <div class="pas_con">
              <el-form ref="form" label-width="70px">
                    <el-form-item label="原密码"  prop="password" size="small">
                        <el-input type="password" v-model="form.oldPas"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码"  prop="password" size="small">
                        <el-input type="password" v-model="form.newPas"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码"  prop="password" size="small">
                        <el-input type="password" v-model="form.successPas"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" class="btn" @click="adminUpPwd">保存</el-button>
                    </el-form-item>
              </el-form>
          </div>
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
    margin-left:10px;
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
      height: 53%;
      width: 100%;
      background: #fff;
      margin-bottom: 20px;
      overflow: auto;
  }
  .right .password{
      height: calc(47% - 20px);
      width: 100%;
      background: #fff;
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
  /* .pas_con{
      width: 70%;
      margin: 0 auto;
  } */
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
  .flex1Header {
    flex:1;
    margin-right:10px;
  }
  .flex1Header button {
    margin-left:10px;
  }
  .inputRow {
    width:300px;
    display: flex;
    flex-direction: row;
  }
  .flex1Header .input {
    flex: 1;
    height: 35px;
    border-radius: 35px;
    border: 1px solid #c2c2c2;
    position: relative;
    box-sizing: border-box;
  }

  .input i {
    position: absolute;
    font-size: 20px;
    top: 6px;
    left: 15px;
  }

  .flex1Header .input input {
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 35px;
    font-size: 14px;
    text-indent: 40px;
    box-sizing: border-box;
    padding-right: 20px;
  }
  .search {
    height: 35px;
    color: white;
    text-align: center;
    line-height: 35px;
    border-radius: 35px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #4768f3;
    margin-left: 10px;
  }
  .radio {
    margin-top: 5px;
    padding-left: 5px;
    text-align: left;
  }
</style>
