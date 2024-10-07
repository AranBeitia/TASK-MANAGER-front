import { describe, it, expect, vi } from 'vitest'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'

describe('main.ts', () => {
  it('should create and mount the app', () => {
    const app = createApp(App)
    const pinia = createPinia()

    const useSpy = vi.spyOn(app, 'use')
    const mountSpy = vi.spyOn(app, 'mount')

    app.use(pinia)
    app.mount('#app')

    expect(useSpy).toHaveBeenCalledWith(pinia)
    expect(mountSpy).toHaveBeenCalledWith('#app')
  })
})
