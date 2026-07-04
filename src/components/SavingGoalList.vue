<script setup>
import EntityList from './EntityList.vue'
import { formatAmount } from './listFormatters'

const fields = [
  { label: 'Name', keys: ['name', 'title'] },
  { label: 'Zielbetrag', keys: ['targetAmount', 'amount', 'goalAmount'], format: formatAmount },
  { label: 'Aktuell', keys: ['currentAmount', 'savedAmount'], format: formatAmount }
]
</script>

<template>
  <EntityList
    endpoint="/saving-goals"
    title="Sparziele"
    empty-text="Noch keine Sparziele vorhanden."
    :fields="fields"
  />
</template>
