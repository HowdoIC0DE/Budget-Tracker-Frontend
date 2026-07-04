<script setup>
import { ref } from 'vue'
import { createItem } from '../services/api'

const emit = defineEmits(['saved'])

const name = ref('')
const type = ref('EXPENSE')
const message = ref('')
const error = ref('')
const isSaving = ref(false)

async function createCategory() {
  message.value = ''
  error.value = ''
  isSaving.value = true

  try {
    await createItem('/categories', {
      name: name.value,
      type: type.value
    })

    name.value = ''
    type.value = 'EXPENSE'
    message.value = 'Gespeichert'
    emit('saved')
  } catch (err) {
    error.value = err.message || 'Kategorie konnte nicht gespeichert werden.'
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <section>
    <h2>Neue Kategorie</h2>

    <form @submit.prevent="createCategory">
      <label>
        Name
        <input v-model="name" placeholder="z. B. Lebensmittel" required />
      </label>

      <label>
        Art
        <select v-model="type">
          <option value="EXPENSE">Ausgabe</option>
          <option value="INCOME">Einnahme</option>
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
