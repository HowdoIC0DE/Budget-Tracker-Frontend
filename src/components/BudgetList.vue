<script setup>
import EntityList from './EntityList.vue'
import { formatAmount } from './listFormatters'

const fields = [
  { label: 'Name', keys: ['name', 'title'] },
  { label: 'Betrag', keys: ['amount', 'limit', 'budgetAmount'], format: formatAmount },
  { label: 'Kategorie', keys: ['categoryName', 'categoryId', 'category'] }
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
