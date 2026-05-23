<script setup>
import { ref, onMounted } from 'vue'

const transactions = ref([])

onMounted(async () => {
  const response = await fetch('https://budget-tracker-webtech.onrender.com/transactions')
  transactions.value = await response.json()
})
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