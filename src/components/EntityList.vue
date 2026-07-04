<script setup>
import { ref, onMounted } from 'vue'
import { getItems } from '../services/api'

const props = defineProps({
  endpoint: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  emptyText: {
    type: String,
    required: true
  },
  fields: {
    type: Array,
    required: true
  }
})

const items = ref([])
const isLoading = ref(true)
const error = ref('')

function findValue(item, field) {
  const keys = field.keys || [field.key]
  const key = keys.find((candidate) => item[candidate] !== undefined && item[candidate] !== null)

  return key ? item[key] : null
}

function displayValue(item, field) {
  const value = findValue(item, field)

  if (field.format) {
    return field.format(value, item)
  }

  return value === null || value === '' ? '-' : value
}

onMounted(async () => {
  try {
    const data = await getItems(props.endpoint)
    items.value = Array.isArray(data) ? data : []
  } catch (err) {
    error.value = err.message || 'Daten konnten nicht geladen werden.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="entity-panel">
    <div class="card-title-row">
      <h2>{{ title }}</h2>
    </div>

    <p v-if="isLoading" class="loading-state">Daten werden geladen...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <p v-else-if="items.length === 0" class="empty-state">{{ emptyText }}</p>

    <ul v-else>
      <li v-for="(item, index) in items" :key="item.id ?? index" class="entity-row">
        <span v-for="field in fields" :key="field.label" class="list-value">
          <strong>{{ field.label }}:</strong> {{ displayValue(item, field) }}
        </span>
      </li>
    </ul>
  </section>
</template>
