<template>
  <div class="wrapper">
    <side-bar title="Health Pack">
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/my-health" :name="'My Health'" icon="tim-icons icon-heart-2"/>
        <sidebar-link to="/symptom-diary" :name="('Symptom Diary')" icon="tim-icons icon-notes"/>
        <sidebar-link to="/calendar" :name="('Calendar')" icon="tim-icons icon-calendar-60"/>
        <sidebar-link to="/patient-preferences" :name="('Patient Preferences')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/services-near-me" :name="('Services Near Me')" icon="tim-icons icon-square-pin"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">
        <RouterView name="DashboardContent"></RouterView>
      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
  import TopNavbar from "./SampleNavbar.vue";
  import ContentFooter from "./SampleFooter.vue";
  import DashboardContent from "./Content.vue";
  import MobileMenu from "./MobileMenu";
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
