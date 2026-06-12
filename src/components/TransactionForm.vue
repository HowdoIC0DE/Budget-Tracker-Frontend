<script setup>
import { ref } from 'vue'

const title = ref('')
const amount = ref('')
const type = ref('EXPENSE')
const date = ref('')

async function createTransaction() {
  await fetch('https://budget-tracker-webtech.onrender.com/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title.value,
      amount: Number(amount.value),
      type: type.value,
      date: date.value
    })
  })

  title.value = ''
  amount.value = ''
  type.value = 'EXPENSE'
  date.value = ''
}
</script>

<template>
  <section>
    <h2>Neue Transaktion</h2>

    <form @submit.prevent="createTransaction">
      <input v-model="title" placeholder="Titel" />

      <input v-model="amount" type="number" step="0.01" placeholder="Betrag" />

      <select v-model="type">
        <option value="EXPENSE">EXPENSE</option>
        <option value="INCOME">INCOME</option>
      </select>

      <input v-model="date" type="date" />

      <button type="submit">Speichern</button>
    </form>
  </section>
</template>