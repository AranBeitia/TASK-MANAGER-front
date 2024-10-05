import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Task {
  id: number
  title: string
  completed: boolean
}

export const useTaskStore = defineStore('task', () => {
  const taskList = ref<Task[]>([] as Task[])

  const getTaskList = computed(() => taskList.value)

  const setTaskList = (data: Task[]) => (taskList.value = data)

  return { taskList, getTaskList, setTaskList }
})
