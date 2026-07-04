// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import CategoryList from '../components/CategoryList.vue'

describe('CategoryList', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders categories loaded with mocked fetch', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify([
        { id: 1, name: 'Lebensmittel', type: 'EXPENSE' }
      ])
    }))

    const wrapper = mount(CategoryList)
    await flushPromises()

    expect(wrapper.text()).toContain('Kategorien')
    expect(wrapper.text()).toContain('Lebensmittel')
    expect(wrapper.text()).toContain('Ausgabe')
  })
})
