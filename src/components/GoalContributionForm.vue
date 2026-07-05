<script setup>
import { ref } from 'vue'
import { createItem } from '../services/api'

const emit = defineEmits(['saved'])

const savingGoalId = ref('')
const amount = ref('')
const date = ref('')
const note = ref('')
const message = ref('')
const error = ref('')
const isSaving = ref(false)

async function createGoalContribution() {
  message.value = ''
  error.value = ''
  isSaving.value = true

  const payload = {
    savingGoalId: Number(savingGoalId.value),
    amount: Number(amount.value)
  }

  if (date.value) {
    payload.date = date.value
  }

  if (note.value.trim()) {
    payload.note = note.value.trim()
  }

  try {
    await createItem('/goal-contributions', payload)

    savingGoalId.value = ''
    amount.value = ''
    date.value = ''
    note.value = ''
    message.value = 'Gespeichert'
    emit('saved')
  } catch (err) {
    error.value = err.message || 'Einzahlung konnte nicht gespeichert werden.'
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <section>
    <h2>Neue Einzahlung</h2>

    <form @submit.prevent="createGoalContribution">
      <label>
        Sparziel-ID
        <input v-model="savingGoalId" type="number" min="1" placeholder="z. B. 1" required />
      </label>

      <label>
        Betrag
        <input v-model="amount" type="number" step="0.01" placeholder="0.00" required />
      </label>

      <label>
        Datum
        <input v-model="date" type="date" />
      </label>

      <label>
        Notiz
        <input v-model="note" placeholder="Optional" />
      </label>

      <button type="submit" :disabled="isSaving">
        {{ isSaving ? 'Speichert...' : 'Speichern' }}
      </button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>
