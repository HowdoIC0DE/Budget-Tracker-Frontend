<script setup>
import TransactionForm from './components/TransactionForm.vue'
import TransactionList from './components/TransactionList.vue'
import CategoryList from './components/CategoryList.vue'
</script>

<template>
  <main>
    <h1>Budget Tracker</h1>

    <TransactionForm />
    <TransactionList />
    <CategoryList />
  </main>
</template>