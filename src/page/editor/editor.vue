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
          <button class="send" @click="sendMessage">修改</button>
          <button class="upload">上传附件 <input type="file" @change="upload($event)"></button>
        </div>
        <div class="upGroup">
          <a href="javascript:;" v-for="item,index in fileArr">
            {{item}}
            <i class="iconfont icon-cuo" @click="removeFile(index,item)"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default require('./editorCtr');
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
</style>
