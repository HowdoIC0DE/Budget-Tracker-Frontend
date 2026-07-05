<script setup>
import EntityList from './EntityList.vue'

const fields = [
  { label: 'Zahlungsart', keys: ['name', 'methodName'] },
  { label: 'Art', keys: ['type', 'paymentType'] }
]
</script>

<template>
  <EntityList
    endpoint="/payment-methods"
    title="Zahlungsarten"
    empty-text="Noch keine Zahlungsarten vorhanden."
    :fields="fields"
  />
</template>
