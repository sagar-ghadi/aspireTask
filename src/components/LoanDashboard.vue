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
              <span class="text-white">{{ results[0].name }}</span>
            </template>
            <b-dropdown-item href="#" @click="signOut()"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid mt-4">
      <div class="row">
        <div
          class="col-12 col-sm-4 col-md-3 col-lg-3"
          v-for="result in results"
          :key="result"
        >
          <b-card class="shadow rounded-5 bg-light-blue card1">
            <b-card-text>
              <p><strong>Name</strong>: {{ result.name }}</p>
              <p><strong>Email Id</strong>: {{ result.email }}</p>
              <p><strong>Loan Amount</strong>: {{ result.amount }}</p>
              <p>
                <strong>Monthly Repayment Amount</strong>:
                {{ result.monthlyRepayment }}
              </p>
            </b-card-text>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router";
export default {
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      debugger;
      let myRegisterData = JSON.parse(
        localStorage.getItem("storedRegisterData")
      );
      let myLoanData = JSON.parse(localStorage.getItem("storedLoanData"));
      let mergedData = { ...myRegisterData, ...myLoanData };
      this.results.push(mergedData);
    },
    signOut() {
      router.push({ name: "Register" });
    },
    visitCssChallenge() {
      router.push({ name: "Dashboard" });
    },
  },
};
</script>
<style lang="scss" scoped>
.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #0C365A;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  display: block;
  position: relative;
  background-color: #f2f8f9;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -2px;
    background: #0C365A;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 40%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(21);
  }
}

.card1:hover {
  p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
  }
}
</style>
