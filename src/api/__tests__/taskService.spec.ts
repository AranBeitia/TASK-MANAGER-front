// import { describe, it, expect, beforeEach, afterEach } from 'vitest'
// import apiClient from '@/api/index'
// import mockAdapter from 'axios-mock-adapter'
// import taskService from '@/api/taskService'
// import type { Task } from '@/types/task.type'

// describe('taskService', () => {
//   const mock = new mockAdapter(apiClient)

//   beforeEach(() => {
//     mock.reset()
//   })

//   afterEach(() => {
//     mock.restore()
//   })

//   it('should fetch tasks', async () => {
//     // GIVEN
//     const expectedTasks: Task[] = [
//       { _id: '1', title: 'Aprender Vue', completed: false },
//       { _id: '2', title: 'Aprender Vuex', completed: true }
//     ]

//     // WHEN
//     mock.onGet('/tasks').reply(200, expectedTasks)
//     const response = await taskService.getTasks()

//     // THEN
//     expect(response).toEqual(expectedTasks)
//   })

//   it('should create a task', async () => {
//     // GIVEN
//     const newTask = { title: 'Aprender Vue3' }

//     // WHEN
//     mock.onPost('/tasks', newTask).reply(201, newTask)
//     const response = await taskService.createTask(newTask)
//     const expectedTask: Task = response.task

//     // THEN
//     expect(expectedTask.title).toEqual(newTask.title)
//   })

//   it('should delete a task', async () => {
//     // GIVEN
//     const taskId = '670cfbb1c8211e1b37aaf5b3'
//     const expectedResponse = { message: 'Task deleted' }

//     // WHEN
//     mock.onDelete(`/tasks/id/${taskId}`).reply(200, expectedResponse)
//     const response = await taskService.deleteTask(taskId)

//     // THEN
//     expect(response.message).toEqual('Task deleted')
//   })

//   it('should complete a task', async () => {
//     // GIVEN
//     const taskId = '670cfbb1c8211e1b37aaf5b3'
//     const expectedResponse = { message: 'Task completed' }

//     // WHEN
//     mock.onPut(`/tasks/complete/id/${taskId}`).reply(200, expectedResponse)
//     const response = await taskService.completeTask(taskId)
//     console.log('response', response)

//     // THEN
//     // expect(response.message).toEqual('Task completed')
//   })
// })

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import apiClient from '@/api/index'
import taskService from '@/api/taskService'
import type { Task } from '@/types/task.type'

describe('taskService', () => {
  let getSpy: any
  let postSpy: any
  let deleteSpy: any
  let putSpy: any

  beforeEach(() => {
    getSpy = vi.spyOn(apiClient, 'get')
    postSpy = vi.spyOn(apiClient, 'post')
    deleteSpy = vi.spyOn(apiClient, 'delete')
    putSpy = vi.spyOn(apiClient, 'put')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should fetch tasks', async () => {
    // GIVEN
    const expectedTasks: Task[] = [
      { _id: '1', title: 'Aprender Vue', completed: false },
      { _id: '2', title: 'Aprender Vuex', completed: true }
    ]
    getSpy.mockResolvedValue({ data: expectedTasks })

    // WHEN
    const response = await taskService.getTasks()

    // THEN
    expect(response).toEqual(expectedTasks)
  })

  it('should create a task', async () => {
    // GIVEN
    const newTask = { title: 'Aprender Vue3' }
    const expectedResponse = { data: newTask }
    postSpy.mockResolvedValue(expectedResponse)

    // WHEN
    const response = await taskService.createTask(newTask)

    // THEN
    expect(postSpy).toHaveBeenCalledWith('/tasks', newTask)
    expect(response).toEqual(newTask)
  })

  it('should delete a task', async () => {
    // GIVEN
    const taskId = '670cfbb1c8211e1b37aaf5b3'
    const expectedResponse = { data: { message: 'Task deleted' } }
    deleteSpy.mockResolvedValue(expectedResponse)

    // WHEN
    const response = await taskService.deleteTask(taskId)

    // THEN
    expect(deleteSpy).toHaveBeenCalledWith(`/tasks/id/${taskId}`)
    expect(response.message).toEqual('Task deleted')
  })

  it('should complete a task', async () => {
    // GIVEN
    const taskId = '670cfbb1c8211e1b37aaf5b3'
    const expectedResponse = { data: { message: 'Task completed' } }
    putSpy.mockResolvedValue(expectedResponse)

    // WHEN
    const response = await taskService.completeTask(taskId)

    // THEN
    expect(putSpy).toHaveBeenCalledWith(`/tasks/complete/id/${taskId}`)
    expect(response.message).toEqual('Task completed')
  })
})
