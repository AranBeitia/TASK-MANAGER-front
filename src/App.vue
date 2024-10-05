<script setup lang="ts">
import { ref } from 'vue'
import { lightTheme, darkTheme } from '@/assets/themes.css'
import SwitchButton from '@/components/switch-button/SwitchButton.vue'
import TaskCard from '@/components/task-card/TaskCard.vue'
import './App.css.js'

const currentTheme = ref(lightTheme)

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === lightTheme ? darkTheme : lightTheme
}
</script>

<template>
  <main :class="currentTheme">
    <SwitchButton @update:isActive="toggleTheme" />
    <TaskCard />
  </main>
</template>
