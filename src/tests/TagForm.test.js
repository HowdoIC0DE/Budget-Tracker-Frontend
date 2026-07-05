// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TagForm from '../components/TagForm.vue'

describe('TagForm', () => {
  it('renders German input fields and submit button', () => {
    const wrapper = mount(TagForm)

    expect(wrapper.text()).toContain('Neuer Tag')
    expect(wrapper.text()).toContain('Name')
    expect(wrapper.text()).toContain('Farbe')
    expect(wrapper.find('input[placeholder="z. B. Urlaub"]').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Speichern')
  })
})
