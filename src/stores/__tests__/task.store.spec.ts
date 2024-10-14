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
})
