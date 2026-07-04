<script setup>
import { ref, onMounted } from 'vue'
import { getItems } from '../services/api'

const categories = ref([])
const isLoading = ref(true)
const error = ref('')

function formatType(type) {
  if (type === 'INCOME') return 'Einnahme'
  if (type === 'EXPENSE') return 'Ausgabe'
  return type || 'Unbekannt'
}

onMounted(async () => {
  try {
    categories.value = await getItems('/categories')
  } catch (err) {
    error.value = err.message || 'Kategorien konnten nicht geladen werden.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="entity-panel">
    <div class="card-title-row">
      <h2>Kategorien</h2>
    </div>

    <p v-if="isLoading" class="loading-state">Kategorien werden geladen...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <p v-else-if="categories.length === 0" class="empty-state">
      Noch keine Kategorien vorhanden.
    </p>

    <ul v-else>
      <li v-for="category in categories" :key="category.id" class="entity-row">
        <span class="list-value">
          <strong>Name:</strong> {{ category.name || 'Ohne Namen' }}
        </span>
        <span class="badge" :class="category.type === 'INCOME' ? 'income' : 'expense'">
          {{ formatType(category.type) }}
        </span>
      </li>
    </ul>
  </section>
</template>
