<template>
  <form @submit="addTask" :class="taskForm">
    <input type="text" v-model="task" placeholder="Add a new task" :class="taskInput" />
    <button type="submit" :class="buttonStyle">+</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import taskService from '@/api/taskService'
import { useTaskStore } from '@/stores/task.store'
import { taskForm, taskInput, buttonStyle } from './TaskListForm.css.js'

const taskStore = useTaskStore()
const task = ref<string>('')

const addTask = async (e) => {
  e.preventDefault()
  try {
    const response = await taskService.createTask({ title: task.value })
    taskStore.addTask(response.task)
    return response
  } catch (error) {
    throw new Error('Error creating task', error)
  }
}
</script>
