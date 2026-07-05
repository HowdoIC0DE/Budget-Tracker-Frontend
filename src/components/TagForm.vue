<script setup>
import { ref } from 'vue'
import { createItem } from '../services/api'

const emit = defineEmits(['saved'])

const name = ref('')
const color = ref('')
const message = ref('')
const error = ref('')
const isSaving = ref(false)

async function createTag() {
  message.value = ''
  error.value = ''
  isSaving.value = true

  const payload = {
    name: name.value
  }

  if (color.value.trim()) {
    payload.color = color.value.trim()
  }

  try {
    await createItem('/tags', payload)

    name.value = ''
    color.value = ''
    message.value = 'Gespeichert'
    emit('saved')
  } catch (err) {
    error.value = err.message || 'Tag konnte nicht gespeichert werden.'
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <section>
    <h2>Neuer Tag</h2>

    <form @submit.prevent="createTag">
      <label>
        Name
        <input v-model="name" placeholder="z. B. Urlaub" required />
      </label>

      <label>
        Farbe
        <input v-model="color" placeholder="Optional, z. B. #35d399" />
      </label>

      <button type="submit" :disabled="isSaving">
        {{ isSaving ? 'Speichert...' : 'Speichern' }}
      </button>
    </form>

    <p v-if="message" class="success">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>
