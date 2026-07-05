// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify([])
    }))
  })

  it('renders the public Budget Tracker page', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Budget Tracker')
    expect(wrapper.text()).toContain('Transaktionen')
    expect(wrapper.text()).toContain('Geld verwalten')
    expect(wrapper.text()).toContain('Planung')
    expect(wrapper.text()).toContain('Tags')
  })
})
