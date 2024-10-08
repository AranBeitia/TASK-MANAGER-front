import apiClient from '.'

export default {
  async getTasks() {
    const response = await apiClient.get('/tasks')
    const { data } = await response
    return data
  },

  async createTask(task: { title: string }) {
    const response = await apiClient.post('/tasks', task)
    const { data } = await response
    return data
  },

  async deleteTask(id: string) {
    await apiClient.delete(`/tasks/id/${id}`)
  }
}
