<script setup>
import EntityList from './EntityList.vue'
import { formatAmount } from './listFormatters'

const fields = [
  { label: 'Name', keys: ['name', 'accountName'] },
  { label: 'Kontostand', keys: ['balance', 'amount'], format: formatAmount },
  { label: 'Art', keys: ['type', 'accountType'] }
]
</script>

<template>
  <EntityList
    endpoint="/accounts"
    title="Konten"
    empty-text="Noch keine Konten vorhanden."
    :fields="fields"
  />
</template>
