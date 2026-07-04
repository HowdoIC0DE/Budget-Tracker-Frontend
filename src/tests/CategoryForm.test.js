// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoryForm from '../components/CategoryForm.vue'

describe('CategoryForm', () => {
  it('renders German input fields and submit button', () => {
    const wrapper = mount(CategoryForm)

    expect(wrapper.text()).toContain('Neue Kategorie')
    expect(wrapper.text()).toContain('Name')
    expect(wrapper.text()).toContain('Art')
    expect(wrapper.find('input[placeholder="z. B. Lebensmittel"]').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Speichern')
  })
})
