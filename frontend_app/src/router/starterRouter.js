import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../layout/starter/SampleLayout.vue';
import Starter from '../layout/starter/SamplePage.vue';
import LineChart from '@/components/Charts/LineChart';

//lazy-loading web pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const SymptomDiary = () =>import(/* webpackChunkName: "dashboard" */"@/pages/SymptomDiary.vue");
const Calendar = () =>import(/* webpackChunkName: "dashboard" */"@/pages/Calendar.vue");
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
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
    }
  ]
});
