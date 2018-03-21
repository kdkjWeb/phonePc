<template>
  <div>
    <div class="default">
      <div class="title">
        <h3>新建</h3>
      </div>
      <div class="label">
        标题：
        <input type="text" v-model="title">
      </div>
      <div class="content">

        <!--<div class="contentBox">-->
        <quill-editor v-model="content" :options="editorOption"></quill-editor>
        <!--</div>-->
      </div>
      <div class="footerBtn">
        <div class="footerBtnG">
          <button class="send" @click="sendMessage">发布人员</button>
          <button class="upload">上传附件 <input type="file" multiple="multiple" @change="upload($event)"></button>
        </div>
        <div class="upGroup">
          <a href="javascript:;" v-for="item,index in fileArr">
            {{item.name}}
            <i class="iconfont icon-cuo" @click="removeFile(index)"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="alert" v-if="alert">
      <div class="alertBox">
        <i class="iconfont icon-cuo" @click="closeLayer"></i>
        <h3>发布公告</h3>
        <div class="tableBox">
          <div class="flex1">
            <p>人员</p>
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
            <div class="flex1Table">
              <el-table class="leftBox"
                        border
                        align="center"
                        height="100%"
                        ref="multipleTable"
                        :data="allPData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection">
                </el-table-column>
                <el-table-column
                  label="部门">
                  <template slot-scope="scope">{{ scope.row.department }}</template>
                </el-table-column>
                <el-table-column
                  prop="typeName"
                  label="岗位">
                </el-table-column>
                <el-table-column
                  prop="username"
                  label="姓名"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="phone"
                  label="手机号"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>

          </div>
          <div class="flex2">
            <div>
              <button @click="add">添加 <i class="iconfont icon-xiangyou"></i></button>
            </div>
            <div>
              <button @click="removeAdd"><i class="iconfont icon-arrow-left"></i> 移除</button>
            </div>
          </div>
          <div class="flex1">
            <p>添加人员</p>
            <div class="flex1Header">
              <div class="inputRow">
                <button class="sendM" @click="sendM">发布公告</button>
              </div>
            </div>
            <div class="flex1Table">
              <el-table class="leftBox"
                        border
                        ref="multipleTable"
                        :data="selectPData"
                        tooltip-effect="dark"
                        height="100%"
                        style="width: 100%"
                        @selection-change="removeSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="部门">
                  <template slot-scope="scope">{{ scope.row.department }}</template>
                </el-table-column>
                <el-table-column
                  prop="typeName"
                  label="岗位">
                </el-table-column>
                <el-table-column
                  prop="username"
                  label="姓名"
                  show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                  prop="phone"
                  label="手机号"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default require('./newCreateCtr');
</script>
<style scoped>
  .quill-editor {
    width: 100%;
    height: calc(100% - 50px);
    word-break: break-all;
  }

  .quill-editor p {
    width: 100%;
    word-break: break-all;
  }
  .label {
    margin-top:20px;
  }
  .label input {
    outline: none;
    height:30px;
    line-height: 30px;
    width:calc(100% - 51px);
    border:1px solid #ccc;
  }
  .default {
    width: 100%;
    height: 100%;
    color: #717171;
    font-size: 14px;
    display: flex;
    flex-direction: column;
  }

  .default .title h3 {
    text-align: center;
    color: #4768f3;
    font-size: 16px;
  }

  .default .title p {
    text-align: right;
  }

  .content {
    margin-top: 20px;
    height: 100px;
    flex: 1;
  }

  .contentBox {
    /*width:100%;*/
    /*height:100%;*/
  }

  .content img {
    width: 100%;
    height: auto;
  }

  .footerBtn {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }

  .footerBtnG {
    width: 210px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .footerBtnG button {
    width: 100px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius: 35px;
    outline: none;
    cursor: pointer;
    border: 1px solid #4768f3;
    background-color: white;
    color: #4768f3;
    position: relative;
  }

  .upload input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    opacity: 0;
  }

  .footerBtnG .send {
    background-color: #4768f3;
    color: white;
  }

  .upGroup {
    flex: 1;
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #ebeef5;
    border-radius: 10px;
  }

  .upGroup a {
    margin-right: 10px;
    display: inline-block;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #4768f3;
    position:relative;
  }
  .upGroup a i{
    position:absolute;
    top:0px;
    right:0px;
    color: #ff5b5d;
    font-size:12px;
    font-weight: bolder;
    z-index:1;
  }

  .alert {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 40px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .4);
    z-index: 10;
  }

  .alertBox {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    position: relative;
  }

  .alertBox {
    text-align: center;
    color: #4768f3;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
  }

  .alertBox .icon-cuo {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: bold;
    z-index: 11;
  }

  .alertBox h3 {
    margin-bottom: 30px;
  }

  .alertBox .tableBox {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  .flex1 {
    flex: 5;
    height: calc(100%);
    display: flex;
    flex-direction: column;
  }

  .flex1Header {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 10px;
    border: 1px solid #ebeef5;
  }

  .flex1Table {
    flex: 1;
    height: 100px;
  }

  .leftBox {
    height: 100%;
  }

  .inputRow {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .input {
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

  .input input {
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
    width: 100px;
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

  .add {
    width: 100px;
    height: 35px;
    color: white;
    text-align: center;
    line-height: 35px;
    border-radius: 35px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #4768f3;
    margin-right: 10px;
  }

  .radio {
    margin-top: 5px;
    padding-left: 5px;
    text-align: left;
  }

  .flex1 p {
    margin-bottom: 10px;
  }

  .flex2 {
    flex: 2;
    height: 100%;
    padding-top: 150px;
    box-sizing: border-box;
  }

  .flex2 button {
    width: 100px;
    height: 35px;
    color: white;
    text-align: center;
    line-height: 35px;
    border-radius: 35px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .flex2 div:nth-of-type(1) button {
    background-color: #f29150;
  }

  .flex2 div:nth-of-type(2) button {
    background-color: #25ada4;
  }

  .sendM {
    width: 100px;
    height: 35px;
    color: white;
    text-align: center;
    line-height: 35px;
    border-radius: 35px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #f2446d;
    margin-left: 10px;
  }

  .flex1Message {
    height: 150px;
    margin-top: 30px;
    position: relative;
  }

  .flex1Message textarea {
    width: 100%;
    height: 120px;
    resize: none;
    outline: none;
    border: 1px solid #ebeef5;
    box-sizing: border-box;
    padding: 10px;
  }

  .flex1Message span {
    position: absolute;
    font-size: 14px;
    bottom: 0px;
    right: 16px;
  }
</style>
