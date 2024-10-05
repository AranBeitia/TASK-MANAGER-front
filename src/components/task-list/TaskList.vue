<template>
  <div>
    <h2>Task TODO - 10</h2>
    <div :class="TaskList">
      <p v-for="task in taskList" :key="task._id">{{ task.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TaskList } from './TaskList.css.js'

interface Task {
  id: number
  title: string
  completed: boolean
}

const props = defineProps<{
  taskList: Task[]
}>()
</script>

<style scoped></style>
