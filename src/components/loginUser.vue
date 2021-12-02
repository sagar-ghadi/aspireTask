<template>
  <div
    class="d-flex align-items-center justify-content-center vh-100 register-form"
  >
    <b-card
      class="col-10 col-md-6 col-lg-4 shadow-sm rounded-5"
      header="Login user"
    >
      <form @submit.prevent="onSubmit" class="px-3 py-2">
        <div>
          <div :class="{ hasError: $v.form.email.$error }" class="mb-3">
            <label>Enter email</label>
            <b-form-input type="text" class="input" v-model="form.email" />
          </div>
          <div :class="{ hasError: $v.form.password.$error }" class="mb-4">
            <label>Enter password</label>
            <b-form-input type="password" class="input" v-model="form.password" />
          </div>
        </div>
        <div class="d-grid">
          <b-button type="submit" class="bg-malachite">Login</b-button>
        </div>
      </form>
    </b-card>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import Vue from "vue";
import router from "../router";

export default {
  data() {
    return {
      form: {
        email: "",
        password:""
      },
      show: true
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, min: minLength(5) }
    },
  },
  methods: {
    makeToast() {
      Vue.toasted.show("login successfully!!!!", {
        type: "success",
        position: "top-right",
        duration: 1000,
      });
    },
    onSubmit() {
      debugger;
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      localStorage.setItem("storedLoginData", JSON.stringify(this.form));
      let registeredData = JSON.parse(localStorage.getItem("storedRegisterData"));
      if(registeredData.email == this.form.email && registeredData.password == this.form.password ){
        this.makeToast();
        router.push({ name: "loanDash" });
      }else{
        alert('Error on login');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.register-form {
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
