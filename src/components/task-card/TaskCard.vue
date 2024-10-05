<template>
  <article :class="CardContainer">
    <task-list-form />
    <section :class="CardSection">
      <div>
        <task-list :taskList="tasks" />
      </div>
    </section>
    <section :class="CardSection">
      <div>
        <div>
          <task-list :taskList="tasks" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CardContainer, CardSection } from './TaskCard.css.js'
import TaskListForm from '@/components/task-list/task-list-form/TaskListForm.vue'
import TaskList from '@/components/task-list/TaskList.vue'
import taskService from '@/api/taskService'
import { useTaskStore } from '@/stores/task.store'

const taskStore = useTaskStore()
const tasks = ref([])

onMounted(async () => {
  const response = await getTaskList()
  taskStore.setTaskList(response.tasks)
  tasks.value = taskStore.taskList
})

const getTaskList = async () => {
  try {
    return await taskService.getTasks()
  } catch (error) {
    throw new Error('Error getting tasks', error)
  }
}
</script>
