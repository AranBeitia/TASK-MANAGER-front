import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useTaskStore } from '@/stores/task.store'

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with a taskList of 0', () => {
    const taskStore = useTaskStore()
    expect(taskStore.taskList.length).toBe(0)
  })

  it('adds a task to the taskList', () => {
    const taskStore = useTaskStore()
    const newTask = { _id: '670cfbb1c8211e1b37aaf5b3', title: 'New Task', completed: false }
    taskStore.addTask(newTask)
    expect(taskStore.taskList.length).toBe(1)
    expect(taskStore.taskList[0].title).toBe('New Task')
  })

  it('removes a task from the taskList', () => {
    const taskStore = useTaskStore()
    const task1 = { _id: '670cfbb1c8211e1b37aaf5b3', title: 'Task 1', completed: false }
    const task2 = { _id: '670cfbb1c8211e1b37aaf5b2', title: 'Task 2', completed: false }
    taskStore.addTask(task1)
    taskStore.addTask(task2)
    taskStore.removeTask(task1._id)
    expect(taskStore.taskList.length).toBe(1)
    expect(taskStore.taskList[0].title).toBe('Task 2')
  })

  it('completes a task from the taskList', () => {
    const taskStore = useTaskStore()
    const task = { _id: '670cfbb1c8211e1b37aaf5b3', title: 'Task to Complete', completed: false }
    taskStore.addTask(task)
    taskStore.completeTask(task._id)
    expect(taskStore.taskList[0].completed).toBe(true)
  })
})
