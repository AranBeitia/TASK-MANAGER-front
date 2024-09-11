import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SwitchButton from '../switch-button/SwitchButton.vue'

describe('SwitchButton', () => {
  it('initially sets the switch to inactive', () => {
    const wrapper = mount(SwitchButton)
    const input = wrapper.find('input[type="checkbox"]')
    expect((input.element as HTMLInputElement).checked).toBe(false)
  })

  it('toggles the switch when clicked', async () => {
    const wrapper = mount(SwitchButton)
    const input = wrapper.find('input[type="checkbox"]')

    // Initially inactive
    expect((input.element as HTMLInputElement).checked).toBe(false)

    // Click to active
    await input.trigger('click')
    expect((input.element as HTMLInputElement).checked).toBe(true)

    // Click to inactive
    await input.trigger('click')
    expect((input.element as HTMLInputElement).checked).toBe(false)
  })
})
