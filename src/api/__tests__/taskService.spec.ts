import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import apiClient from '@/api/index'
import mockAdapter from 'axios-mock-adapter'
import taskService from '@/api/taskService'
import type { Task } from '@/types/task.type'

const mock = new mockAdapter(apiClient)

describe('taskService', () => {
  beforeEach(() => mock.reset())

  afterEach(() => mock.restore())

  it('should fetch tasks', async () => {
    // GIVEN
    const expectedTasks: Task[] = [
      { _id: '1', title: 'Aprender Vue', completed: false },
      { _id: '2', title: 'Aprender Vuex', completed: true }
    ]

    // WHEN
    mock.onGet('/tasks').reply(200, expectedTasks)
    const response = await taskService.getTasks()

    // THEN
    expect(response).toEqual(expectedTasks)
  })

  it('should create a task', async () => {
    // GIVEN
    const newTask = { title: 'Aprender Vue3' }

    // WHEN
    mock.onPost('/tasks', newTask).reply(201, newTask)
    const response = await taskService.createTask(newTask)
    const expectedTask: Task = response.task

    // THEN
    expect(expectedTask.title).toEqual(newTask.title)
  })

  it('should delete a task', async () => {
    // GIVEN
    const taskId = '1'
    const expectedResponse = { message: 'Task deleted' }

    // WHEN
    mock.onDelete(`/tasks/id/${taskId}`).reply(200, expectedResponse)
    // const response = await taskService.deleteTask(taskId)

    // THEN
    // expect(response.message).toEqual('Task deleted')
    // expect(mock.history.delete.length).toBe(1)
  })
})
