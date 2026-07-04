<script setup>
import EntityList from './EntityList.vue'

const fields = [
  { label: 'Transaktion', keys: ['transactionId'] },
  { label: 'Notiz', keys: ['note', 'content', 'text'] }
]
</script>

<template>
  <EntityList
    endpoint="/transaction-notes"
    title="Transaktionsnotizen"
    empty-text="Noch keine Transaktionsnotizen vorhanden."
    :fields="fields"
  />
</template>
