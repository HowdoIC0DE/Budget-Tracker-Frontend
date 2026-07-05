<script setup>
import EntityList from './EntityList.vue'
import { formatAmount } from './listFormatters'

function formatAccountType(type) {
  if (type === 'CHECKING') return 'Girokonto'
  if (type === 'SAVINGS') return 'Sparkonto'
  if (type === 'CASH') return 'Bargeld'
  return type || '-'
}

const fields = [
  { label: 'Konto', keys: ['name', 'accountName'] },
  { label: 'Kontostand', keys: ['balance', 'amount'], format: formatAmount },
  { label: 'Art', keys: ['type', 'accountType'], format: formatAccountType }
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
