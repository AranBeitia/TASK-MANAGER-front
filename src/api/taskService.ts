// import type { Task } from '@/types/task.type'
import apiClient from './index'

const taskService = {
  getTasks: async () => {
    const response = await apiClient.get('/tasks')
    return response.data
  },
  createTask: async (task: { title: string }) => {
    const response = await apiClient.post('/tasks', task)
    return response.data
  },
  deleteTask: async (id: string) => {
    const response = await apiClient.delete(`/tasks/id/${id}`)
    return response.data
  },
  completeTask: async (id: string) => {
    const response = await apiClient.put(`/tasks/complete/id/${id}`)
    return response.data
  }
}

export default taskService
