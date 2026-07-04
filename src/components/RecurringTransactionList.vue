<script setup>
import EntityList from './EntityList.vue'
import { formatAmount, formatType } from './listFormatters'

const fields = [
  { label: 'Titel', keys: ['title', 'name'] },
  { label: 'Betrag', keys: ['amount'], format: formatAmount },
  { label: 'Art', keys: ['type'], format: formatType },
  { label: 'Intervall', keys: ['interval', 'frequency'] }
]
</script>

<template>
  <EntityList
    endpoint="/recurring-transactions"
    title="Wiederkehrende Transaktionen"
    empty-text="Noch keine wiederkehrenden Transaktionen vorhanden."
    :fields="fields"
  />
</template>
