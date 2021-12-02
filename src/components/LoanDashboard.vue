<template>
  <div>
    <b-navbar toggleable="lg" class="px-4 bg-malachite">
      <b-navbar-brand href="#" class="text-white fw-bold"
        ><img src="@/assets/icons/MobLogo.svg" /> Aspire</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <b-button variant="outline-light" @click="visitCssChallenge()"
            >Click here to visit CSS challenge</b-button
          >
          <b-nav-item-dropdown>
            <template #button-content>
              <span class="text-white">Settings</span>
            </template>
            <b-dropdown-item href="#" @click="signOut()"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid mt-4 px-5">
      <div class="row">
        <b-table striped hover bordered :items="results" :fields="fields"></b-table>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router";
export default {
  data() {
    return {
        results:'',
        fields: ['name', 'loan_amount', 'monthly_payment','mobile_number','email_id']
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      debugger;
      let myLoanData = JSON.parse(localStorage.getItem("getData"));
      this.results = myLoanData;
    },
    signOut() {
      router.push({ name: "loginForm" });
    },
    visitCssChallenge() {
      router.push({ name: "Dashboard" });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
