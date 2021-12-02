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
          <div :class="{ hasError: $v.form.name.$error }" class="mb-3">
            <label>Enter name</label>
            <b-form-input type="text" class="input" v-model="form.name" />
          </div>
          <div :class="{ hasError: $v.form.email.$error }" class="mb-3">
            <label>Enter email</label>
            <b-form-input type="text" class="input" v-model="form.email" />
          </div>
          <div :class="{ hasError: $v.form.amount.$error }" class="mb-4">
            <label>Enter amount</label>
            <b-form-input type="number" class="input" v-model="form.amount" />
          </div>
          <div
            :class="{ hasError: $v.form.monthlyRepayment.$error }"
            class="mb-3"
          >
            <label>Enter monthly repayment</label>
            <b-form-input
              type="number"
              class="input"
              v-model="form.monthlyRepayment"
            />
          </div>
           <div :class="{ hasError: $v.form.date.$error }" class="mb-4">
            <label>Select date</label>
            <b-form-input type="date" class="input" v-model="form.date" />
          </div>
          <div :class="{ hasError: $v.form.mnumber.$error }" class="mb-4">
            <label>Enter Mobile Number</label>
            <b-form-input type="number" class="input" v-model="form.mnumber" />
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
import { required, email } from "vuelidate/lib/validators";
import Vue from "vue";
import router from "../router";
export default {
  data() {
    return {
      form: {
        name:"",
        email:"",
        date:"",
        amount: "",
        monthlyRepayment: "",
        mnumber:""
      },
      show: true,
      storedData: [],
      dashboardArrayOfObject: [],
    };
  },
  validations: {
    form: {
      amount: { required },
      monthlyRepayment: { required },
      name:{ required },
      email:{ required, email },
      date:{ required },
      mnumber:{required}
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
      this.dashboardArrayOfObject =
        (localStorage && JSON.parse(localStorage.getItem("getData"))) || [];
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      debugger;
      let amount = this.form.amount;
      let monthpay = this.form.monthlyRepayment;
      let date = this.form.date;
      let name = this.form.name;
      let email = this.form.email;
      let mnumber = this.form.mnumber;
      if (!amount && !monthpay && !date && !name && !email && !mnumber) {
        console.log("Please enter the data into form");
        return;
      }
      let existingObject = this.loanData();
      localStorage &&
      localStorage.setItem("getData", JSON.stringify(existingObject));
      this.form.amount = "";
      this.form.monthlyRepayment = "";
      this.form.date ="";
      this.form.name = "";
      this.form.email = "";
      this.form.mnumber="";
      this.dashboardArrayOfObject =
      localStorage && JSON.parse(localStorage.getItem("getData"));
      this.makeToast();
      router.push({ name: "loanDash" });
    },

    loanData() {
      let loanDataObject = {};
      loanDataObject["loan_amount"] = this.form.amount;
      loanDataObject["monthly_payment"] = this.form.monthlyRepayment;
      loanDataObject["name"] = this.form.name;
      loanDataObject["email_id"] = this.form.email;
      loanDataObject["date"] = this.form.date;
      loanDataObject["mobile_number"] = this.form.mnumber;
      if (localStorage && localStorage.getItem("getData")) {
        this.storedData = JSON.parse(localStorage.getItem("getData"));
        this.storedData.push(loanDataObject);
      } else {
        this.storedData.push(loanDataObject);
      }
      return this.storedData;
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
