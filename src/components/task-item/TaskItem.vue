<template>
  <div :class="ItemContainer">
    <p data-test="task-title">{{ task.title }}</p>
    <div>
      <button>Completar</button>
      <button>Borrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ItemContainer } from './TaskItem.css.js'
import { Task } from '@/types/task.type'

const props = defineProps<{
  task: Task
}>()
</script>

<style scoped></style>
