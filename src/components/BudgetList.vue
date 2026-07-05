<script setup>
import EntityList from './EntityList.vue'
import { formatAmount, formatDate } from './listFormatters'

const fields = [
  { label: 'Budget', keys: ['name', 'title'] },
  { label: 'Betrag', keys: ['amount', 'limit', 'budgetAmount'], format: formatAmount },
  { label: 'Kategorie', keys: ['categoryName', 'categoryId', 'category'] },
  { label: 'Start', keys: ['startDate', 'periodStart'], format: formatDate },
  { label: 'Ende', keys: ['endDate', 'periodEnd'], format: formatDate }
]
</script>

<template>
  <EntityList
    endpoint="/budgets"
    title="Budgets"
    empty-text="Noch keine Budgets vorhanden."
    :fields="fields"
  />
</template>
