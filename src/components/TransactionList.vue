<script setup>
const transactions = [
  {
    id: 1,
    title: "Miete",
    amount: 650.0,
    type: "EXPENSE"
  },
  {
    id: 2,
    title: "Gehalt",
    amount: 1400.0,
    type: "INCOME"
  },
  {
    id: 3,
    title: "Einkauf",
    amount: 45.99,
    type: "EXPENSE"
  }
]
</script>

<template>
  <section>
    <h2>Transactions</h2>

    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.title }} - {{ transaction.amount }} € - {{ transaction.type }}
      </li>
    </ul>
  </section>
</template>