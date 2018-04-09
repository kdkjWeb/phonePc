<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    width:100%;
    height:100%;
    font-size:14px;
    font-family: "Microsoft Yahei";
    min-width: 1200px;
  }
  *{
    padding:0;
    margin:0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  .clear:after {
    content:'';
    display:block;
    clear: both;
  }
  img {
    border:none;
  }
  #app {
    height:100%;
  }
</style>
