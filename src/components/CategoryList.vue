<script setup>
const categories = [
  { id: 1, name: "Miete", type: "EXPENSE" },
  { id: 2, name: "Lebensmittel", type: "EXPENSE" },
  { id: 3, name: "Gehalt", type: "INCOME" }
]
</script>

<template>
  <section>
    <h2>Kategorien</h2>

    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }} - {{ category.type }}
      </li>
    </ul>
  </section>
</template>