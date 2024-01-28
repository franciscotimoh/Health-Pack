<template>
  <div class="table-responsive">
  <base-table :data="tableData"
              :columns="columns"
  ></base-table>
  </div>
</template>

<script>
  import { BaseTable } from "@/components";

  export default {
    components: {
      BaseTable
    },
    data(){
      return {
        columns: ["name", "dosage", "prescribed","expiration", "frequency", "side_effects"],
        tableData: [{
          name: "Accutane",
          dosage: "10mg",
          prescribed: "2024-11-20",
          expiration: "2024-11-21",
          frequency: "daily",
          side_effects: "f"
        }]
      }
    }
  }
</script>

<style>


</style>
