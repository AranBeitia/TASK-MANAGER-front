<template>
  <div :class="ItemContainer" data-test="task-status">
    <p data-test="task-title" :class="{ [IsDone]: task.completed }">{{ task.title }}</p>
    <div :class="actions">
      <base-button buttonText="Completar" isDisabled></base-button>
      <base-button buttonText="Borrar"></base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ItemContainer, IsDone, actions } from './TaskItem.css.js'
import { Task } from '@/types/task.type'
import BaseButton from '@/components/base/base-button/BaseButton.vue'

const props = defineProps<{
  task: Task
}>()
</script>
