<template>
  <div>
    <div class="left">
      <div class="btnGroup">
        <button class="new" @click="newCreate()">新建</button>
        <button class="remove">删除</button>
        <button class="send">发送消息</button>
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
          <h3>{{detail.title}}</h3>
          <p>{{detail.date}}</p>
        </div>
        <div class="content" >
          <div class="contentBox" ref="contentBox" v-html="detail.content"></div>
        </div>
        <div class="upGroup">
          <a href="www.baidu.com">文件111.doc</a>
          <a href="www.baidu.com">文件111.doc</a>
          <a href="www.baidu.com">文件111.doc</a>
          <a href="www.baidu.com">文件111.doc</a>
          <a href="www.baidu.com">文件111.doc</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default require('./docCtr');
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
    color:#333;
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
  .upGroup {
    width:100%;
    padding:10px 20px;
    box-sizing: border-box;
    border-radius:10px;
    margin-top:20px;
    border:1px solid #ebeef5;
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
</style>
