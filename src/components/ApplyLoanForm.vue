<template>
  <div
    class="d-flex align-items-center justify-content-center vh-100 loan-form"
  >
    <b-card
      class="col-10 col-md-6 col-lg-4 shadow-sm rounded-5"
      header="Loan apply form"
    >
      <form @submit.prevent="onSubmit" class="px-3 py-2">
        <div>
          <div :class="{ hasError: $v.form.amount.$error }" class="mb-4">
            <label>Enter amount</label>
            <b-form-input type="number" class="input" v-model="form.amount" />
          </div>
           <div :class="{ hasError: $v.form.monthlyRepayment.$error }" class="mb-3">
            <label>Enter monthly repayment</label>
            <b-form-input type="number" class="input" v-model="form.monthlyRepayment" />
          </div>
          <div class="mb-3">
            <label>Loan terms:</label>
          </div>
        </div>
        <div class="d-grid">
          <b-button type="submit" class="bg-malachite">Submit</b-button>
        </div>
      </form>
    </b-card>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import Vue from "vue";
import router from "../router";
export default {
  data() {
    return {
      form: {
        amount: "",
        monthlyRepayment: ""
      },
      show: true,
    };
  },
  validations: {
    form: {
      amount: { required },
      monthlyRepayment: { required },
    },
  },
  methods: {
    makeToast() {
      Vue.toasted.show("Successfully applied for loan!!!!", {
        type: "success",
        position: "top-right",
        duration: 2000,
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      // var myData = JSON.parse(localStorage.getItem('storedData'));
      // if (myData["name"] === this.form.name && myData["password"] === this.form.password) {
        localStorage.setItem("storedLoanData", JSON.stringify(this.form));
        this.makeToast();
        router.push({ name: "loanDash" });
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
.loan-form {
  label {
    font-size: 13px;
    font-weight: 700;
  }
  .card-header {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
}
.input {
  background-color: #f7f7f7;
  border: 1px solid rgb(199, 199, 199);
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  .hasError & {
    border-color: red;
  }
}

.hasError label {
  color: red;
}

.form-control:focus {
  box-shadow: none;
}
.btn-check:focus + .btn-secondary,
.btn-secondary:focus {
  box-shadow: none;
  border: 0 !important;
}
</style>
