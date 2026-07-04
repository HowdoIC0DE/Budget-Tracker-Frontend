<script setup>
import { computed, onMounted, ref } from 'vue'
import { getItems } from '../services/api'
import { formatAmount } from './listFormatters'

const transactions = ref([])
const isLoading = ref(true)
const error = ref('')

function amountFor(type) {
  return transactions.value
    .filter((transaction) => transaction.type === type)
    .reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0)
}

const totalIncome = computed(() => amountFor('INCOME'))
const totalExpenses = computed(() => amountFor('EXPENSE'))
const currentBalance = computed(() => totalIncome.value - totalExpenses.value)
const transactionCount = computed(() => transactions.value.length)

onMounted(async () => {
  try {
    const data = await getItems('/transactions')
    transactions.value = Array.isArray(data) ? data : []
  } catch (err) {
    error.value = err.message || 'Uebersicht konnte nicht geladen werden.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="overview-grid" aria-label="Finanzuebersicht">
    <article class="metric-card income">
      <span class="metric-label">Gesamte Einnahmen</span>
      <strong>{{ isLoading ? '...' : formatAmount(totalIncome) }}</strong>
      <small v-if="error">{{ error }}</small>
    </article>

    <article class="metric-card expense">
      <span class="metric-label">Gesamte Ausgaben</span>
      <strong>{{ isLoading ? '...' : formatAmount(totalExpenses) }}</strong>
    </article>

    <article class="metric-card balance">
      <span class="metric-label">Aktueller Saldo</span>
      <strong>{{ isLoading ? '...' : formatAmount(currentBalance) }}</strong>
    </article>

    <article class="metric-card count">
      <span class="metric-label">Anzahl Transaktionen</span>
      <strong>{{ isLoading ? '...' : transactionCount }}</strong>
    </article>
  </section>
</template>
