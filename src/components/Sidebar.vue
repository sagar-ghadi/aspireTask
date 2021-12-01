<template>
    <div id="sidebar-wrapper" class="d-none d-md-block d-lg-block d-xl-block">
      <ul class="sidebar-nav">
        <li class="sidebar-brand">
          <a href="#">
            <img src="../assets/icons/Logo.svg" alg="brand-logo" />
            <p class="sub-title">Trusted way of banking for 3,000+ SMEs and startups in Singapore </p>
          </a>
        </li>
        <li class="d-flex ms-4">
          <img src="../assets/icons/Home.svg" alg="home-icon" />
          <a href="#">Home</a>
        </li>
        <li class="d-flex ms-4">
          <img src="../assets/icons/Card.svg" alg="card-icon" />
          <a href="#">Cards</a>
        </li>
        <li class="d-flex ms-4">
           <img src="../assets/icons/Payments.svg" alg="payments-icon" />
          <a href="#">Payments</a>
        </li>
        <li class="d-flex ms-4">
          <img src="../assets/icons/Credit.svg" alg="credit-icon" />
          <a href="#">Credit</a>
        </li>
        <li class="d-flex ms-4">
          <img src="../assets/icons/Account.svg" alg="account-icon" />
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#wrapper {
  padding-left: 350px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 300px;
  height: 100%;
  margin-left: -250px;
  background: #0c365a;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#page-content-wrapper {
  width: 100%;
  position:relative;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 0;
  margin: 0;
  padding: 10px;
  list-style: none;
}
.sidebar-nav li:nth-child(2){
  padding-top:7rem;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 60px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #fff;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #01D167;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}
.sub-title{
  margin: 20px 20px;
  line-height: 1.4;
  color: #fff;
  width: 250px;
  font-size: 14px;
  text-indent: 0px;
  position: relative;
  opacity: 30%;
  font-weight:100;
}

</style>
