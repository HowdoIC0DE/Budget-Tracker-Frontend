<script setup>
import { ref } from 'vue'
import { createItem } from '../services/api'

const emit = defineEmits(['saved'])

const name = ref('')
const targetAmount = ref('')
const currentAmount = ref('')
const message = ref('')
const error = ref('')
const isSaving = ref(false)

async function createSavingGoal() {
  message.value = ''
  error.value = ''
  isSaving.value = true

  try {
    await createItem('/saving-goals', {
      name: name.value,
      targetAmount: Number(targetAmount.value),
      currentAmount: Number(currentAmount.value || 0)
    })

    name.value = ''
    targetAmount.value = ''
    currentAmount.value = ''
    message.value = 'Gespeichert'
    emit('saved')
  } catch (err) {
    error.value = err.message || 'Sparziel konnte nicht gespeichert werden.'
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <section>
    <h2>Neues Sparziel</h2>

    <form @submit.prevent="createSavingGoal">
      <label>
        Name
        <input v-model="name" placeholder="z. B. Urlaub" required />
      </label>

      <label>
        Zielbetrag
        <input v-model="targetAmount" type="number" step="0.01" placeholder="0.00" required />
      </label>

      <label>
        Bereits gespart
        <input v-model="currentAmount" type="number" step="0.01" placeholder="0.00" />
      </label>

      <button type="submit" :disabled="isSaving">
        {{ isSaving ? 'Speichert...' : 'Speichern' }}
      </button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>
