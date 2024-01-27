<template>
<div>
  <card :title="'How are you feeling today?'">
    <form @submit.prevent>
      <base-input label="Date and Time"
                  type="datetime-local"
                  placeholder="Enter date and time"
                  v-model="currentDateTime">
      </base-input>
      <discomfort-scale label="Level of Discomfort ( 1: Mild, 10: High )"></discomfort-scale>
      <br>
      <base-input label="Symptoms"
                  type="text">
        <textarea class="form-control with-border" rows="3"
                  placeholder="Enter your symptoms and how it makes you feel here...">
        </textarea>
      </base-input>

      <base-button native-type="submit" type="primary">Submit</base-button>
    </form>
  </card>

</div>
</template>

<script>
import DiscomfortScale from "@/pages/SymptomDiary/DiscomfortScale.vue";

export default {
  components: {DiscomfortScale},
    data() {
      const currentDateTime = this.getCurrentDateTime();
      return {
        currentDateTime
      };
    },
  methods: {
      getCurrentDateTime(){
        const now = new Date();
        // Subtract 8 hours (8 * 60 * 60 * 1000 milliseconds) from the current date and time
        const offsetDateTime = new Date(now.getTime() - 8 * 60 * 60 * 1000);

        // Format the date and time in a way accepted by `datetime-local` input
        return offsetDateTime.toISOString().slice(0, 16);
      }
  }
}
</script>
<style>

</style>
