<script setup>
import EntityList from './EntityList.vue'
import { formatDate } from './listFormatters'

const fields = [
  { label: 'Name', keys: ['name', 'title'] },
  { label: 'Start', keys: ['startDate', 'from'], format: formatDate },
  { label: 'Ende', keys: ['endDate', 'to'], format: formatDate }
]
</script>

<template>
  <EntityList
    endpoint="/budget-periods"
    title="Budget-Zeiträume"
    empty-text="Noch keine Budget-Zeiträume vorhanden."
    :fields="fields"
  />
</template>
