<script setup>
import { ref } from 'vue'
import { createItem } from '../services/api'

const emit = defineEmits(['saved'])

const name = ref('')
const amount = ref('')
const categoryId = ref('')
const message = ref('')
const error = ref('')
const isSaving = ref(false)

async function createBudget() {
  message.value = ''
  error.value = ''
  isSaving.value = true

  const payload = {
    name: name.value,
    amount: Number(amount.value)
  }

  if (categoryId.value) {
    payload.categoryId = Number(categoryId.value)
  }

  try {
    await createItem('/budgets', payload)

    name.value = ''
    amount.value = ''
    categoryId.value = ''
    message.value = 'Gespeichert'
    emit('saved')
  } catch (err) {
    error.value = err.message || 'Budget konnte nicht gespeichert werden.'
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <section>
    <h2>Neues Budget</h2>

    <form @submit.prevent="createBudget">
      <label>
        Name
        <input v-model="name" placeholder="z. B. Monatsbudget" required />
      </label>

      <label>
        Betrag
        <input v-model="amount" type="number" step="0.01" placeholder="0.00" required />
      </label>

      <label>
        Kategorie-ID (optional)
        <input v-model="categoryId" type="number" min="1" placeholder="z. B. 1" />
      </label>

      <button type="submit" :disabled="isSaving">
        {{ isSaving ? 'Speichert...' : 'Speichern' }}
      </button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>
