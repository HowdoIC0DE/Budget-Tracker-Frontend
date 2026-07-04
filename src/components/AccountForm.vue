<script setup>
import { ref } from 'vue'
import { createItem } from '../services/api'

const emit = defineEmits(['saved'])

const name = ref('')
const balance = ref('')
const type = ref('CHECKING')
const message = ref('')
const error = ref('')
const isSaving = ref(false)

async function createAccount() {
  message.value = ''
  error.value = ''
  isSaving.value = true

  try {
    await createItem('/accounts', {
      name: name.value,
      balance: Number(balance.value),
      type: type.value
    })

    name.value = ''
    balance.value = ''
    type.value = 'CHECKING'
    message.value = 'Gespeichert'
    emit('saved')
  } catch (err) {
    error.value = err.message || 'Konto konnte nicht gespeichert werden.'
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <section>
    <h2>Neues Konto</h2>

    <form @submit.prevent="createAccount">
      <label>
        Name
        <input v-model="name" placeholder="z. B. Girokonto" required />
      </label>

      <label>
        Startbetrag
        <input v-model="balance" type="number" step="0.01" placeholder="0.00" required />
      </label>

      <label>
        Art
        <select v-model="type">
          <option value="CHECKING">Girokonto</option>
          <option value="SAVINGS">Sparkonto</option>
          <option value="CASH">Bargeld</option>
        </select>
      </label>

      <button type="submit" :disabled="isSaving">
        {{ isSaving ? 'Speichert...' : 'Speichern' }}
      </button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>
