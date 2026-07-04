<script setup>
import { ref, onMounted } from 'vue'
import { getItems } from '../services/api'

const transactions = ref([])
const isLoading = ref(true)
const error = ref('')

function formatType(type) {
  if (type === 'INCOME') return 'Einnahme'
  if (type === 'EXPENSE') return 'Ausgabe'
  return type || 'Unbekannt'
}

function formatAmount(amount) {
  const value = Number(amount)
  if (Number.isNaN(value)) return amount

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)
}

onMounted(async () => {
  try {
    transactions.value = await getItems('/transactions')
  } catch (err) {
    error.value = err.message || 'Transaktionen konnten nicht geladen werden.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section>
    <h2>Transaktionen</h2>

    <p v-if="isLoading">Transaktionen werden geladen...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <p v-else-if="transactions.length === 0">Noch keine Transaktionen vorhanden.</p>

    <ul v-else>
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.title || 'Ohne Titel' }} -
        {{ formatAmount(transaction.amount) }} -
        {{ formatType(transaction.type) }}
      </li>
    </ul>
  </section>
</template>
