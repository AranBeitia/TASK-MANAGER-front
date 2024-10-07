<template>
  <div>
    <h2>{{ completed ? 'DONE' : 'TODO' }} - {{ filteredTasks.length }}</h2>
    <div :class="TaskListClass">
      <task-item v-for="task in filteredTasks" :key="task._id" :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TaskListClass } from './TaskList.css.js'
import { Task } from '@/types/task.type'
import TaskItem from '@/components/task-item/TaskItem.vue'

const props = defineProps<{
  taskList: Task[]
  completed?: boolean
}>()

const filteredTasks = computed(() =>
  props.taskList.filter((task) => task.completed === props.completed)
)
</script>

<style scoped></style>
