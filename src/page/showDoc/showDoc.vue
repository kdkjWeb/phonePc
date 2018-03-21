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

        <div class="footerBtn">
          <div class="footerBtnG" v-if="editorV">
            <button class="send" @click="editor">修改</button>
          </div>
          <div class="upGroup">
            <a v-for="item in detail.files" :href="[hrefs+'news/downloadFile?newsid='+queryId+'&&fileName='+item]">{{item}}</a>
          </div>
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
    overflow:auto;
  }
  .contentBox img {
    height:auto;
  }
  .footerBtn {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }

  .footerBtnG {
    width: 100px;
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
  .footerBtnG .send {
    background-color: #4768f3;
    color: white;
  }
  .upGroup {
    flex:1;
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
