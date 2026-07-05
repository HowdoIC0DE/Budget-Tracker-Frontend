<script setup>
import { ref } from 'vue'
import { createItem } from '../services/api'

const emit = defineEmits(['saved'])

const title = ref('')
const amount = ref('')
const type = ref('EXPENSE')
const date = ref('')
const categoryId = ref('')
const accountId = ref('')
const paymentMethodId = ref('')
const merchantId = ref('')
const note = ref('')
const message = ref('')
const error = ref('')
const isSaving = ref(false)

function addOptionalNumber(payload, key, value) {
  if (value !== '') {
    payload[key] = Number(value)
  }
}

async function createTransaction() {
  message.value = ''
  error.value = ''
  isSaving.value = true

  const payload = {
    title: title.value,
    amount: Number(amount.value),
    type: type.value,
    date: date.value
  }

  addOptionalNumber(payload, 'categoryId', categoryId.value)
  addOptionalNumber(payload, 'accountId', accountId.value)
  addOptionalNumber(payload, 'paymentMethodId', paymentMethodId.value)
  addOptionalNumber(payload, 'merchantId', merchantId.value)

  if (note.value.trim()) {
    payload.note = note.value.trim()
  }

  try {
    await createItem('/transactions', payload)

    title.value = ''
    amount.value = ''
    type.value = 'EXPENSE'
    date.value = ''
    categoryId.value = ''
    accountId.value = ''
    paymentMethodId.value = ''
    merchantId.value = ''
    note.value = ''
    message.value = 'Gespeichert'
    emit('saved')
  } catch (err) {
    error.value = err.message || 'Transaktion konnte nicht gespeichert werden.'
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <section>
    <div class="card-title-row">
      <div>
        <span class="section-kicker">Neue Buchung</span>
        <h2>Neue Transaktion</h2>
      </div>
    </div>

    <form @submit.prevent="createTransaction">
      <label>
        Titel
        <input v-model="title" placeholder="z. B. Einkauf" required />
      </label>

      <div class="form-grid">
        <label>
          Betrag
          <input v-model="amount" type="number" step="0.01" placeholder="0.00" required />
        </label>

        <label>
          Art
          <select v-model="type">
            <option value="EXPENSE">Ausgabe</option>
            <option value="INCOME">Einnahme</option>
          </select>
        </label>
      </div>

      <label>
        Datum
        <input v-model="date" type="date" required />
      </label>

      <div class="form-grid">
        <label>
          Kategorie-ID
          <input v-model="categoryId" type="number" min="1" placeholder="Optional" />
        </label>

        <label>
          Konto-ID
          <input v-model="accountId" type="number" min="1" placeholder="Optional" />
        </label>
      </div>

      <div class="form-grid">
        <label>
          Zahlungsart-ID
          <input v-model="paymentMethodId" type="number" min="1" placeholder="Optional" />
        </label>

        <label>
          Händler-ID
          <input v-model="merchantId" type="number" min="1" placeholder="Optional" />
        </label>
      </div>

      <label>
        Notiz
        <input v-model="note" placeholder="Optional, z. B. Monatsabo" />
      </label>

      <button type="submit" :disabled="isSaving">
        {{ isSaving ? 'Speichert...' : 'Speichern' }}
      </button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>
