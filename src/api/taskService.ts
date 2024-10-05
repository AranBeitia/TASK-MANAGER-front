import apiClient from '.'

export default {
  async getTasks() {
    const response = await apiClient.get('/tasks')
    const { data } = await response
    return data
  }
}
