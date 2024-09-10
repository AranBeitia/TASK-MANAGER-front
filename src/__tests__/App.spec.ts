import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('App', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('renders the correct content', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    await router.push('/about')
    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('About')
  })
})
