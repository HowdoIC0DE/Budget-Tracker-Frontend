<script setup>
import EntityList from './EntityList.vue'
import { formatAmount, formatDate } from './listFormatters'

const fields = [
  { label: 'Einzahlung', keys: ['amount'], format: formatAmount },
  { label: 'Sparziel', keys: ['savingGoalName', 'savingGoalId', 'goalId'] },
  { label: 'Datum', keys: ['date', 'createdAt'], format: formatDate },
  { label: 'Notiz', keys: ['note', 'description'] }
]
</script>

<template>
  <EntityList
    endpoint="/goal-contributions"
    title="Sparziel-Einzahlungen"
    empty-text="Noch keine Sparziel-Einzahlungen vorhanden."
    :fields="fields"
  />
</template>
