<script setup>
import EntityList from './EntityList.vue'

const fields = [
  { label: 'Tag', keys: ['name', 'title'] },
  { label: 'Farbe', keys: ['color', 'hexColor'] }
]
</script>

<template>
  <EntityList
    endpoint="/tags"
    title="Tags"
    empty-text="Noch keine Tags vorhanden."
    :fields="fields"
  />
</template>
