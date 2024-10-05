<template>
  <div class="switch-button__wrapper">
    <label class="switch-button">
      <input type="checkbox" :checked="isActive" @change="toggleSwitch" />
      <span class="switch-button__slider"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
const emit = defineEmits(['update:isActive'])

const toggleSwitch = () => {
  isActive.value = !isActive.value
  emit('update:isActive', isActive.value)
}
</script>

<style lang="scss" scoped>
.switch-button {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  &__wrapper {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: red;
    transition: 0.4s;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
}

input:checked + .switch-button__slider {
  background-color: red;
  border: 1px solid white;
}

input:focus + .switch-button__slider {
  box-shadow: 0 0 1px white;
}

input:checked + .switch-button__slider:before {
  transform: translateX(26px);
  // border: 1px solid white;
  background-color: red;
}
</style>
