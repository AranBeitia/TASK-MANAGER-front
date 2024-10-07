import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '@/App.vue'
import { lightTheme, darkTheme } from '@/assets/themes.css'

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('toggles the theme when SwitchButton emits update:isActive', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia()]
      }
    })

    // Initially light theme
    expect(wrapper.vm.currentTheme).toBe(lightTheme)

    // find the switch button component and trigger the update:isActive event
    const switchButton = wrapper.findComponent({ name: 'SwitchButton' })
    await switchButton.vm.$emit('update:isActive', true)

    // Verify that the theme has changed to dark
    expect(wrapper.vm.currentTheme).toBe(darkTheme)

    // Trigger the event again
    await switchButton.vm.$emit('update:isActive', false)

    // Verify that the theme has changed back to light
    expect(wrapper.vm.currentTheme).toBe(lightTheme)
  })
})
