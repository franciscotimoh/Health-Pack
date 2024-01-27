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
          name: "Molly",
          dosage: "Point",
          prescribed: "2024-11-20",
          expiration: "never",
          frequency: "daily",
          side_effects: "fetanyl poisoning"
        }]
      }
    }
  }
</script>

<style>

</style>
