<script setup>
import EntityList from './EntityList.vue'

const fields = [
  { label: 'Name', keys: ['name', 'merchantName'] },
  { label: 'Kategorie', keys: ['categoryName', 'categoryId', 'category'] }
]
</script>

<template>
  <EntityList
    endpoint="/merchants"
    title="Händler"
    empty-text="Noch keine Händler vorhanden."
    :fields="fields"
  />
</template>
