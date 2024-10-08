import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Task {
  _id: number
  title: string
  completed: boolean
}

export const useTaskStore = defineStore('task', () => {
  const taskList = ref<Task[]>([] as Task[])

  // const getTaskList = computed(() => taskList.value)

  const setTaskList = (tasks: Task[]) => (taskList.value = tasks)

  const addTask = (task: Task) => taskList.value.push(task)

  const removeTask = (id: number) => {
    taskList.value = taskList.value.filter((task) => task._id !== id)
  }

  return { taskList, setTaskList, addTask, removeTask }
})
