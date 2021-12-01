<template>
  <nav class="mobile-navbar d-md-none d-md-none">
    <a href="#" class="nav__link">
      <img src="../assets/icons/MobLogo.svg"/>
      <span class="nav__text">Home</span>
    </a>
    <a href="#" class="nav__link nav__link--active mt-1">
      <img src="../assets/icons/MobPay.svg"/>
      <span class="nav__text">Cards</span>
    </a>
    <a href="#" class="nav__link">
      <img src="../assets/icons/MobPayments.svg"/>
      <span class="nav__text">Payments</span>
    </a>
    <a href="#" class="nav__link">
      <img src="../assets/icons/MobCredit.svg"/>
      <span class="nav__text">Credit</span>
    </a>
    <a href="#" class="nav__link">
      <img src="../assets/icons/MobAccount.svg"/>
      <span class="nav__text">Profile</span>
    </a>
  </nav>
</template>
<style scoped>
.mobile-navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  overflow-x: auto;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 12px;
  color: #DDDDDD;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
  background-color: #eeeeee;
}

.nav__link--active {
  color: #009578;
}

.nav__icon {
  font-size: 18px;
}
</style>
<script>
export default {
  name: "MobileNavbar",
  data() {
    return {};
  },
};
</script>
