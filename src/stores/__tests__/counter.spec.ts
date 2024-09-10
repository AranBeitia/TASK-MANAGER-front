import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with a count of 0', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0)
  })

  it('increments the count', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })

  it('computes doubleCount correctly', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.doubleCount).toBe(2)
  })
})
