<template>
    <div>
      <div class="default">
        <div class="title">
          <h3>{{detail.title}}</h3>
          <p>{{detail.pubTime}}</p>
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
</template>
<script>
    export default require('./showDocCtr');
</script>
<style>
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
