import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../layout/starter/DashboardLayout.vue';
import Starter from '../layout/starter/SamplePage.vue';
import LineChart from '@/components/Charts/LineChart';

//lazy-loading web pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const SymptomDiary = () =>import(/* webpackChunkName: "dashboard" */"@/pages/SymptomDiary.vue");
const Calendar = () =>import(/* webpackChunkName: "dashboard" */"@/pages/Calendar.vue");
const Login = () =>import(/* webpackChunkName: "dashboard" */"@/pages/Login.vue");
const Register = () =>import(/* webpackChunkName: "dashboard" */"@/pages/Register.vue");
const Welcome = () =>import(/* webpackChunkName: "dashboard" */"@/pages/Welcome.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/welcome",
      component: DashboardLayout,
      children: [

        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'symptom-diary',
          name: 'symptom diary',
          component: SymptomDiary
        },
        {
          path: 'calendar',
          name: 'calendar',
          component: Calendar
        }
      ]
    },
    {
      path: "/login",
      name: "Auth Page",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome
    }
  ]
});
