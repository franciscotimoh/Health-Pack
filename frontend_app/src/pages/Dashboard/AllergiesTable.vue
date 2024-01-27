<template>
  <base-table :data="tableData"
              :columns="columns">

  </base-table>
</template>

<script>
import BaseTable from "@/components/BaseTable.vue";

export default {
  components: {
    BaseTable
  },
  data(){
    return {
      columns: ["allergy"],
      tableData: [{
        allergy: "nuts"
      }]
    }
  }
}
</script>

<style scoped>

</style>
