import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Register from '../components/Register.vue'
import LoanForm from '../components/ApplyLoanForm.vue'
import loanDash from '../components/LoanDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/loanForm',
    name: 'LoanForm',
    component: LoanForm
  },
  {
    path: '/loanDash',
    name: 'loanDash',
    component: loanDash
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router
