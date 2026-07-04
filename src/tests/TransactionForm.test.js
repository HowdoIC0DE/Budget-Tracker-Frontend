// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TransactionForm from '../components/TransactionForm.vue'

describe('TransactionForm', () => {
    it('renders input fields and submit button', () => {
        const wrapper = mount(TransactionForm)

        expect(wrapper.text()).toContain('Neue Transaktion')
        expect(wrapper.find('input[placeholder="Titel"]').exists()).toBe(true)
        expect(wrapper.find('input[placeholder="Betrag"]').exists()).toBe(true)
        expect(wrapper.find('select').exists()).toBe(true)
        expect(wrapper.find('button').text()).toBe('Speichern')
    })
})