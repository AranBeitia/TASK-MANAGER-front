<template>
  <div :class="ItemContainer" data-test="task-status">
    <p data-test="task-title" :class="{ [IsDone]: task.completed }">{{ task.title }}</p>
    <div :class="actions">
      <base-button> <i class="fas fa-check"></i></base-button>
      <base-button @click="handleDelete"> <i class="fas fa-trash"></i> </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ItemContainer, IsDone, actions } from './TaskItem.css.js'
import type { Task } from '@/types/task.type'
import taskService from '@/api/taskService'
import { useTaskStore } from '@/stores/task.store'
import BaseButton from '@/components/base/base-button/BaseButton.vue'

const taskStore = useTaskStore()

const props = defineProps<{
  task: Task
}>()

const handleDelete = async () => {
  await taskService.deleteTask(props.task._id)
  taskStore.removeTask(props.task._id)
}
</script>
