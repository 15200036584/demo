<template>
  <div id="app">
    <div class="header">

    </div>
    <router-view class="main"/>
    <div class="footer">
        <router-link to='/home' tag='li'>首页</router-link>
        <router-link to='/mine' tag='li'>我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
html,body{
  width:100%;
  height:100%;
}
#app {
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
}
.header{
  width:100%;
  height:45px;
}
.main{
  flex:1;
}
.footer{
  width: 100%;
  height:45px;
  line-height: 45px;
  display:flex;
}
.footer li{
  flex:1;
  text-align: center;
}
.router-link-active{
  background: purple;
  color:#fff;
  cursor: pointer;
}
</style>
