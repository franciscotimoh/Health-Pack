<template>
<div>
  <card :title="'How are you feeling today?'">
    <form @submit.prevent>
      <base-input label="Date and Time:"
                  type="datetime-local"
                  placeholder="Enter date and time"
                  v-model="currentDateTime">
      </base-input>
      <div class="Symptom Type">
        <slot name="label">
          <label class="control-label">
            {{"Type:"}}
          </label>
        </slot>
        <br>
        <select id="symptomType" v-model="userFormData.physical_or_mental">
          <option value="Mental">Mental</option>
          <option value="Physical">Physical</option>
        </select>
      </div>
      <br>
      <discomfort-scale label="Level of Discomfort ( 1: Mild, 10: High ):" @mood-selected="updateMood"></discomfort-scale>
      <br>

      <base-input label="Symptoms:"
                  type="text">
        <textarea class="form-control with-border" rows="3"
                  placeholder="Enter your symptoms and how it makes you feel here..." v-model="description">
        </textarea>
      </base-input>

      <base-button native-type="submit" type="primary" @click="collectSymptomResponses">Submit</base-button>
    </form>
  </card>

</div>
</template>

<script>
import DiscomfortScale from "@/pages/SymptomDiary/DiscomfortScale.vue";
import { writeUserData } from "@/firebase.js";

export default {
  components: {DiscomfortScale},
    data() {
      // const currentDateTime = this.getCurrentDateTime();
      // return {
      //   currentDateTime
      // };
      const currentDateTime = this.getCurrentDateTime();
      return {
        currentDateTime,
        userFormData: {
          name: 'Steve', // Empty string
          ID: 1000101,
          date: currentDateTime,
          mood: 5,
          physical_or_mental: '',
          description: ''
        },
      };

    },
  methods: {
    updateMood(selectedMood) {
      this.userFormData.mood = selectedMood;
      console.log(`Selected Mood in parent component: ${selectedMood}`);
    },
    
    getCurrentDateTime() {
      const now = new Date();
      const offsetDateTime = new Date(now.getTime() - 8 * 60 * 60 * 1000);
      return offsetDateTime.toISOString().slice(0, 16);
    },

    collectSymptomResponses() {// Gather form data
      const userID = 101011; 
      const formData = {
        name: this.userFormData.name,
        ID: userID,
        date: this.userFormData.date,
        mood: this.userFormData.mood,
        physical_or_mental: this.userFormData.physical_or_mental,
        description: this.description
      };

      writeUserData(
        formData.name,
        formData.ID,
        formData.date,
        formData.mood,
        formData.physical_or_mental,
        formData.description
      );

      // Clear/refresh the form
      this.currentDateTime = this.getCurrentDateTime();
      // Clear other form fields as needed
    },
  },
};
</script>
<style>

</style>
