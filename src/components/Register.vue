<template>
  <div
    class="d-flex align-items-center justify-content-center vh-100 register-form"
  >
    <b-card
      class="col-10 col-md-6 col-lg-4 shadow-sm rounded-5"
      header="Register user"
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
          <div :class="{ hasError: $v.form.password.$error }" class="mb-4">
            <label>Enter password</label>
            <b-form-input type="password" class="input" v-model="form.password" />
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
import { required, email, minLength } from "vuelidate/lib/validators";
import Vue from "vue";
import router from "../router";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password:""
      },
      show: true,
    };
  },
  validations: {
    form: {
      name: { required, min: minLength(5) },
      email: { required, email },
      password: { required, min: minLength(5) }
    },
  },
  methods: {
    makeToast() {
      Vue.toasted.show("registered successfully!!!!", {
        type: "success",
        position: "top-right",
        duration: 1000,
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      localStorage.setItem("storedRegisterData", JSON.stringify(this.form));
      this.makeToast();
      router.push({ name: "LoanForm" });
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
