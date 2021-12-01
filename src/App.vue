<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bg-blue:hover {
  background: none;
}

@media(max-width:1024px){
  #wrapper{
    padding-left: 310px !important;
  }
}
@media(max-width:991px){
  #sidebar-wrapper{
    width:265px !important;
  }
  #wrapper{
    padding-left:270px !important;
  }
}
@media(max-width:767px){
  #wrapper{
    padding-left:0 !important;
  }
  .tab-card-shadow{
    box-shadow:none !important;
  }
  .dot{
    margin-right:2px !important;
  }
  .text-xs-white{
    color:#fff;
  }
  body{
    background:#0C365A !important;
  }
  .custom-nav-line .nav-pills .nav-link.active{
    background:none !important;
    color:#fff !important;
  }
  .show-card-number-btn{
    background: #fff;
    padding: 6px;
    width: 143px;
    margin-left: auto;
    border-top-left-radius: 10px;
    margin-bottom: -12px;
    margin-right: 1px;
    border-top-right-radius: 10px;
  }
  .bg-blue {
    background: none !important;
    color: #23CEFD !important;
  }
  .fs-12 {
    font-size: 8px !important;
  }
}
</style>
