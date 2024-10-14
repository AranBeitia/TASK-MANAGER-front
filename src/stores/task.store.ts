import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/types/task.type'

export const useTaskStore = defineStore('task', () => {
  const taskList = ref<Task[]>([] as Task[])

  const setTaskList = (tasks: Task[]) => (taskList.value = tasks)

  const addTask = (task: Task) => taskList.value.push(task)

  const removeTask = (id: string) => {
    taskList.value = taskList.value.filter((task) => task._id !== id)
  }

  const completeTask = (id: string) => {
    taskList.value = taskList.value.map((task) => {
      if (task._id !== id) return task
      return { ...task, completed: !task.completed }
    })
  }

  return { taskList, setTaskList, addTask, removeTask, completeTask }
})
