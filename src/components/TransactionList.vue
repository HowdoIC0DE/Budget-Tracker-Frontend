<script setup>
import { ref, onMounted } from 'vue'
import { getItems } from '../services/api'
import { formatAmount, formatDate, formatType } from './listFormatters'

const transactions = ref([])
const isLoading = ref(true)
const error = ref('')

function transactionKind(type) {
  if (type === 'INCOME') return 'income'
  if (type === 'EXPENSE') return 'expense'
  return ''
}

function transactionMeta(transaction) {
  return [
    transaction.categoryName || (transaction.categoryId ? `Kategorie ${transaction.categoryId}` : ''),
    transaction.accountName || (transaction.accountId ? `Konto ${transaction.accountId}` : ''),
    transaction.paymentMethodName ||
      (transaction.paymentMethodId ? `Zahlungsart ${transaction.paymentMethodId}` : ''),
    transaction.merchantName || (transaction.merchantId ? `Händler ${transaction.merchantId}` : '')
  ].filter(Boolean)
}

onMounted(async () => {
  try {
    const data = await getItems('/transactions')
    transactions.value = Array.isArray(data) ? data : []
  } catch (err) {
    error.value = err.message || 'Transaktionen konnten nicht geladen werden.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="transaction-panel">
    <div class="card-title-row">
      <div>
        <span class="section-kicker">Letzte Buchungen</span>
        <h2>Transaktionen</h2>
      </div>
      <span class="badge">Live</span>
    </div>

    <p v-if="isLoading" class="loading-state">Transaktionen werden geladen...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <p v-else-if="transactions.length === 0" class="empty-state">
      Noch keine Transaktionen vorhanden.
    </p>

    <ul v-else class="transaction-list">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="transaction-row"
      >
        <div class="transaction-main">
          <strong>{{ transaction.title || 'Ohne Titel' }}</strong>
          <small>{{ formatDate(transaction.date) }} · {{ formatType(transaction.type) }}</small>
          <div v-if="transactionMeta(transaction).length" class="transaction-meta">
            <span v-for="meta in transactionMeta(transaction)" :key="meta">{{ meta }}</span>
          </div>
          <p v-if="transaction.note" class="transaction-note">
            {{ transaction.note }}
          </p>
        </div>

        <div class="transaction-amount" :class="transactionKind(transaction.type)">
          <span>{{ formatAmount(transaction.amount) }}</span>
          <span class="badge" :class="transactionKind(transaction.type)">
            {{ formatType(transaction.type) }}
          </span>
        </div>
      </li>
    </ul>
  </section>
</template>
