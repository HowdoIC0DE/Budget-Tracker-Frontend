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

function badgeClass(field, item) {
  if (field.badgeClass) {
    return field.badgeClass(findValue(item, field), item)
  }

  return ''
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

    <ul v-else class="entity-list">
      <li v-for="(item, index) in items" :key="item.id ?? index" class="entity-row">
        <div class="entity-main">
          <strong>{{ displayValue(item, fields[0]) }}</strong>
          <small v-if="fields[0]?.label">{{ fields[0].label }}</small>
        </div>

        <div v-if="fields.length > 1" class="entity-meta">
          <span
            v-for="field in fields.slice(1)"
            :key="field.label"
            class="meta-pill"
            :class="badgeClass(field, item)"
          >
            <span>{{ field.label }}</span>
            <strong>{{ displayValue(item, field) }}</strong>
          </span>
        </div>
      </li>
    </ul>
  </section>
</template>
