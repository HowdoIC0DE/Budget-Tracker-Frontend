// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TransactionForm from '../components/TransactionForm.vue'

describe('TransactionForm', () => {
  it('renders German input fields and submit button', () => {
    const wrapper = mount(TransactionForm)

    expect(wrapper.text()).toContain('Neue Transaktion')
    expect(wrapper.text()).toContain('Titel')
    expect(wrapper.text()).toContain('Betrag')
    expect(wrapper.text()).toContain('Art')
    expect(wrapper.text()).toContain('Kategorie-ID')
    expect(wrapper.text()).toContain('Konto-ID')
    expect(wrapper.text()).toContain('Zahlungsart-ID')
    expect(wrapper.text()).toContain('Händler-ID')
    expect(wrapper.text()).toContain('Notiz')
    expect(wrapper.find('input[placeholder="z. B. Einkauf"]').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Speichern')
  })
})
