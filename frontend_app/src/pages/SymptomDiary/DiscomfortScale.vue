<template>
  <div>
    <div>
    <slot name="label">
      <label v-if="label" class="control-label">
        {{label}}
      </label>
    </slot>
    </div>
    <base-button :type="buttonTypes[0]" @click="changeButtonType(0)">1</base-button>
    <base-button :type="buttonTypes[1]" @click="changeButtonType(1)">2</base-button>
    <base-button :type="buttonTypes[2]" @click="changeButtonType(2)">3</base-button>
    <base-button :type="buttonTypes[3]" @click="changeButtonType(3)">4</base-button>
    <base-button :type="buttonTypes[4]" @click="changeButtonType(4)">5</base-button>
    <base-button :type="buttonTypes[5]" @click="changeButtonType(5)">6</base-button>
    <base-button :type="buttonTypes[6]" @click="changeButtonType(6)">7</base-button>
    <base-button :type="buttonTypes[7]" @click="changeButtonType(7)">8</base-button>
    <base-button :type="buttonTypes[8]" @click="changeButtonType(8)">9</base-button>
    <base-button :type="buttonTypes[9]" @click="changeButtonType(9)">10</base-button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      description: "Input label"
    }
  },
  data() {
    return {
      buttonTypes: Array(10).fill('default'), // Initialize an array for button types
    };
  },
  methods: {
    changeButtonType(index) {
      // Unselect all buttons
      this.buttonTypes = Array(10).fill('default');

      // Select the clicked button
      this.$set(this.buttonTypes, index, 'warning');
      console.log(`Button ${index + 1} clicked!`);
    },
  },
};
</script>

<style>
</style>
