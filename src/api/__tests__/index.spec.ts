import { describe, it, expect } from 'vitest'
import apiClient from '../index'

describe('apiClient', () => {
  it('should be configured with the correct baseUrl and headers', () => {
    expect(apiClient.defaults.baseURL).toBe('http://localhost:3000')
    expect(apiClient.defaults.headers['Content-Type']).toBe('application/json')
  })
})
