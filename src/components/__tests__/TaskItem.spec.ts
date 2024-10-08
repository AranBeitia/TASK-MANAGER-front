import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import TaskItem from '@/components/task-item/TaskItem.vue'
import type { Task } from '@/types/task.type'
import { IsDone } from '@/components/task-item/TaskItem.css'

describe('TaskItem', () => {
  let wrapper: VueWrapper<any>

  const task: Task = {
    id: 1,
    title: 'Task 1',
    completed: false
  }

  beforeEach(() => {
    wrapper = mount(TaskItem, {
      props: { task }
    })
  })

  it('renders the task title', () => {
    const title = wrapper.find('[data-test="task-title"]')
    expect(title.text()).toBe(task.title)
    expect(title.exists()).toBe(true)
  })

  it('applies the IsDone class when task is completed', async () => {
    const title = wrapper.find('[data-test="task-title"]')
    expect(title.classes()).not.toContain('IsDone')

    // Update the task to be completed
    await wrapper.setProps({ task: { ...task, completed: true } })
    expect(title.classes()).toContain(IsDone)
  })
})
