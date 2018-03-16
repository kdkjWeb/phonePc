<template>
  <div>
    <div class="left">
      <div class="btnGroup">
        <button class="new" @click="newCreate()">新建</button>
        <button class="remove">删除</button>
        <button class="send" @click="sendMessage()">发送消息</button>
      </div>
      <el-table class="table"
                ref="singleTable"
                :data="tableData"
                border
                highlight-current-row
                @current-change="handleCurrentChange"
                height="250"
                style="width: 100%">

        <el-table-column
          property="title"
          label="标题">
        </el-table-column>
        <el-table-column
          property="date"
          label="发布日期">
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
      <div class="default">
        <div class="title">
          <h3>新建</h3>
        </div>
        <div class="content" >
          <div class="contentBox">

          </div>
        </div>
        <div class="footerBtn">
          <div class="footerBtnG">
            <button class="send" @click="sendPeople">发布人员</button>
            <button class="upload">上传附件</button>
          </div>
          <div class="upGroup">
            <a href="www.baidu.com">文件111.doc</a>
          </div>
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
                  <input type="text" placeholder="请输入搜索信息">
                </div>
                <button class="search">查询</button>
              </div>
              <div class="radio">
                <el-radio v-model="radio" label="1">部门</el-radio>
                <el-radio v-model="radio" label="2">姓名</el-radio>
                <el-radio v-model="radio" label="3">电话</el-radio>
              </div>
            </div>
            <div class="flex1Table">
              <el-table class="leftBox"
                        ref="singleTable"
                        :data="tableData"
                        border
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        height="100%"
                        style="width: 100%">

                <el-table-column
                  property="title"
                  label="标题">
                </el-table-column>
                <el-table-column
                  property="date"
                  label="发布日期">
                </el-table-column>
              </el-table>
            </div>

          </div>
          <div class="flex2">
            <div>
              <button>添加 <i class="iconfont icon-xiangyou"></i></button>
            </div>
            <div>
              <button><i class="iconfont icon-arrow-left"></i> 移除</button>
            </div>
          </div>
          <div class="flex1">
            <p>添加人员</p>
            <div class="flex1Header">
              <div class="inputRow">
                <button class="sendM">发送消息</button>
              </div>
            </div>
            <div class="flex1Table">
              <el-table class="leftBox"
                        ref="singleTable"
                        :data="tableData"
                        border
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        height="100%"
                        style="width: 100%">

                <el-table-column
                  property="title"
                  label="标题">
                </el-table-column>
                <el-table-column
                  property="date"
                  label="发布日期">
                </el-table-column>
              </el-table>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div class="alert" v-if="alert1">
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
                  <input type="text" placeholder="请输入搜索信息">
                </div>
                <button class="search">查询</button>
              </div>
              <div class="radio">
                <el-radio v-model="radio" label="1">部门</el-radio>
                <el-radio v-model="radio" label="2">姓名</el-radio>
                <el-radio v-model="radio" label="3">电话</el-radio>
              </div>
            </div>
            <div class="flex1Table">
              <el-table class="leftBox"
                        ref="singleTable"
                        :data="tableData"
                        border
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        height="100%"
                        style="width: 100%">

                <el-table-column
                  property="title"
                  label="标题">
                </el-table-column>
                <el-table-column
                  property="date"
                  label="发布日期">
                </el-table-column>
              </el-table>
            </div>

          </div>
          <div class="flex2">
            <div>
              <button>添加 <i class="iconfont icon-xiangyou"></i></button>
            </div>
            <div>
              <button><i class="iconfont icon-arrow-left"></i> 移除</button>
            </div>
          </div>
          <div class="flex1">
            <p>添加人员</p>
            <div class="flex1Header">
              <div class="inputRow">
                <button class="add">添加号码</button>
                <div class="input">
                  <i class="iconfont icon-search_icon"></i>
                  <input type="text" placeholder="输入手机号">
                </div>
                <button class="sendM">发送消息</button>
                </div>
            </div>
            <div class="flex1Table">
              <el-table class="leftBox"
                        ref="singleTable"
                        :data="tableData"
                        border
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        height="100%"
                        style="width: 100%">

                <el-table-column
                  property="title"
                  label="标题">
                </el-table-column>
                <el-table-column
                  property="date"
                  label="发布日期">
                </el-table-column>
              </el-table>
            </div>
            <div class="flex1Message">
              <p>消息</p>
              <span>{{textV.length}}/{{textVCount}}</span>
              <textarea name="" id="" v-model="textV" :maxlength="textVCount" @input="textValue">
              </textarea>
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
    width:80%;
    margin:0 auto;
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
  .send {
    background-color: #f2446d;
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
    padding:20px;
    background-color: white;
  }
  .default {
    width:100%;
    height:100%;
    color:#717171;
    font-size:14px;
    /*margin-top:20px;*/
    display: flex;
    flex-direction: column;
  }
  .default .title h3 {
    text-align: center;
    color:#4768f3;
    font-size:16px;
  }
  .default .title p {
    text-align: right;
  }
  .content {
    margin-top:20px;
    height:100px;
    flex: 1;
  }
  .contentBox {
    width:100%;
    height:100%;
    overflow-y:scroll;
  }
  .contentBox img {
    width:100%;
    height:auto;
  }
  .footerBtn {
    width:100%;
    border-radius:10px;
    margin-top:20px;
    display:flex;
    flex-direction: row;
  }
  .footerBtnG {
    width:210px;
    margin-right:10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-end;
  }
  .footerBtnG button {
    width:100px;
    height:35px;
    text-align: center;
    line-height:35px;
    border-radius: 35px;
    outline: none;
    cursor: pointer;
    border:1px solid #4768f3;
    background-color: white;
    color:#4768f3;
  }
  .footerBtnG .send {
    background-color: #4768f3;
    color:white;
  }
  .upGroup {
    flex: 1;
    padding:10px 20px;
    box-sizing: border-box;
    border:1px solid #ebeef5;
    border-radius: 10px;
  }
  .upGroup a {
    margin-right:10px;
    display:inline-block;
    width:100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#4768f3;
  }
  .alert {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    padding:40px;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.4);
    z-index:10;
  }
  .alertBox {
    width:100%;
    height:100%;
    background-color: white;
    border-radius: 10px;
    position:relative;
  }
  .alertBox {
    text-align: center;
    color:#4768f3;
    display: flex;
    flex-direction: column;
    padding:30px;
    box-sizing: border-box;
  }
  .alertBox .icon-cuo {
    position:absolute;
    top:10px;
    right:10px;
    font-size:20px;
    font-weight: bold;
    z-index:11;
  }
  .alertBox h3 {
    margin-bottom:30px;
  }
  .alertBox .tableBox {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .flex1 {
    flex:5;
    height:calc(100%);
    display: flex;
    flex-direction: column;
  }
  .flex1Header {
    width:100%;
    box-sizing: border-box;
    padding:20px 10px;
    border:1px solid #ebeef5;
  }
  .flex1Table {
    flex: 1;
    height:100px;
  }
  .leftBox {
    height:100%;
  }
  .inputRow {
    width:100%;
    display: flex;
    flex-direction: row;
  }
  .input {
    flex: 1;
    height:35px;
    border-radius: 35px;
    border:1px solid #c2c2c2;
    position:relative;
    box-sizing: border-box;
  }
  .input i {
    position:absolute;
    font-size:20px;
    top:6px;
    left:15px;
  }
  .input input {
    width:100%;
    height:35px;
    line-height:35px;
    background-color: transparent;
    outline: none;
    border:none;
    border-radius: 35px;
    font-size:14px;
    text-indent:40px;
    box-sizing: border-box;
    padding-right:20px;
  }
  .search {
    width:100px;
    height:35px;
    color:white;
    text-align: center;
    line-height:35px;
    border-radius: 35px;
    outline: none;
    border:none;
    cursor: pointer;
    background-color: #4768f3;
    margin-left:10px;
  }
  .add {
    width:100px;
    height:35px;
    color:white;
    text-align: center;
    line-height:35px;
    border-radius: 35px;
    outline: none;
    border:none;
    cursor: pointer;
    background-color: #4768f3;
    margin-right:10px;
  }
  .radio {
    margin-top:5px;
    padding-left:5px;
    text-align: left;
  }
  .flex1 p {
    margin-bottom:10px;
  }

  .flex2 {
    flex: 2;
    height:100%;
    padding-top:150px;
    box-sizing: border-box;
  }
  .flex2 button {
    width:100px;
    height:35px;
    color:white;
    text-align: center;
    line-height:35px;
    border-radius: 35px;
    outline: none;
    border:none;
    cursor: pointer;
    margin-bottom:20px;
  }
  .flex2 div:nth-of-type(1) button{
    background-color: #f29150;
  }
  .flex2 div:nth-of-type(2) button{
    background-color: #25ada4;
  }
  .sendM {
    width:100px;
    height:35px;
    color:white;
    text-align: center;
    line-height:35px;
    border-radius: 35px;
    outline: none;
    border:none;
    cursor: pointer;
    background-color: #f2446d;
    margin-left:10px;
  }

  .flex1Message {
    height:150px;
    margin-top:30px;
    position:relative;
  }
  .flex1Message textarea{
    width:100%;
    height:120px;
    resize: none;
    outline: none;
    border:1px solid #ebeef5;
    box-sizing: border-box;
    padding:10px;
  }
  .flex1Message span {
    position:absolute;
    font-size:14px;
    bottom:0px;
    right:16px;
  }
</style>
