<template>
  <article :class="CardContainer">
    <TaskListForm />
  </article>
</template>

<script setup lang="ts">
import { CardContainer } from './TaskCard.css.js'
import TaskListForm from '@/components/task-list/TaskListForm.vue'
</script>
