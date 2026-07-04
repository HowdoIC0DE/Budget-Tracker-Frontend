<script setup>
import { ref } from 'vue'
import TransactionForm from './components/TransactionForm.vue'
import TransactionList from './components/TransactionList.vue'
import CategoryForm from './components/CategoryForm.vue'
import CategoryList from './components/CategoryList.vue'
import AccountForm from './components/AccountForm.vue'
import AccountList from './components/AccountList.vue'
import BudgetForm from './components/BudgetForm.vue'
import BudgetList from './components/BudgetList.vue'
import BudgetPeriodList from './components/BudgetPeriodList.vue'
import RecurringTransactionList from './components/RecurringTransactionList.vue'
import SavingGoalForm from './components/SavingGoalForm.vue'
import SavingGoalList from './components/SavingGoalList.vue'
import PaymentMethodList from './components/PaymentMethodList.vue'
import MerchantList from './components/MerchantList.vue'
import TransactionNoteList from './components/TransactionNoteList.vue'

const transactionListKey = ref(0)
const categoryListKey = ref(0)
const accountListKey = ref(0)
const budgetListKey = ref(0)
const savingGoalListKey = ref(0)

function refreshTransactionList() {
  transactionListKey.value += 1
}

function refreshCategoryList() {
  categoryListKey.value += 1
}

function refreshAccountList() {
  accountListKey.value += 1
}

function refreshBudgetList() {
  budgetListKey.value += 1
}

function refreshSavingGoalList() {
  savingGoalListKey.value += 1
}
</script>

<template>
  <main>
    <header class="hero">
      <p class="eyebrow">WebTech Projekt</p>
      <h1>Budget Tracker</h1>
      <p>
        Diese Seite zeigt die wichtigsten Funktionen der Haushalts-App: Transaktionen erfassen,
        Kategorien und Konten verwalten, Budgets planen und Sparziele verfolgen.
      </p>
    </header>

    <section class="use-case">
      <h2>1. Einnahmen und Ausgaben</h2>
      <p>Erfasse neue Transaktionen und prüfe die gespeicherten Einträge aus dem Backend.</p>

      <div class="panel-grid">
        <TransactionForm @saved="refreshTransactionList" />
        <TransactionList :key="transactionListKey" />
      </div>
    </section>

    <section class="use-case">
      <h2>2. Kategorien und Konten</h2>
      <p>Kategorien helfen beim Sortieren. Konten zeigen, wo das Geld liegt.</p>

      <div class="panel-grid">
        <CategoryForm @saved="refreshCategoryList" />
        <CategoryList :key="categoryListKey" />
        <AccountForm @saved="refreshAccountList" />
        <AccountList :key="accountListKey" />
      </div>
    </section>

    <section class="use-case">
      <h2>3. Budgets und Sparziele</h2>
      <p>Plane Limits für Ausgaben und halte einfache Sparziele fest.</p>

      <div class="panel-grid">
        <BudgetForm @saved="refreshBudgetList" />
        <BudgetList :key="budgetListKey" />
        <SavingGoalForm @saved="refreshSavingGoalList" />
        <SavingGoalList :key="savingGoalListKey" />
      </div>
    </section>

    <section class="use-case">
      <h2>4. Weitere Budget-Daten</h2>
      <p>Diese Listen zeigen weitere Backend-Bereiche, die das Budget Tracker Projekt unterstützt.</p>

      <div class="panel-grid compact">
        <BudgetPeriodList />
        <RecurringTransactionList />
        <PaymentMethodList />
        <MerchantList />
        <TransactionNoteList />
      </div>
    </section>
  </main>
</template>

<style>
:root {
  color: #1e293b;
  background: #f4f7fb;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

main {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 48px;
}

.hero {
  margin-bottom: 32px;
  padding: 28px;
  color: white;
  background: #224466;
  border-radius: 8px;
}

.hero h1 {
  margin: 8px 0 12px;
  font-size: 2.4rem;
}

.hero p {
  max-width: 760px;
  margin: 0;
  line-height: 1.6;
}

.eyebrow {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0;
}

.use-case {
  margin-top: 28px;
}

.use-case > h2 {
  margin-bottom: 8px;
}

.use-case > p {
  margin-top: 0;
  color: #475569;
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.panel-grid > section {
  min-width: 0;
  padding: 20px;
  background: white;
  border: 1px solid #d7dee8;
  border-radius: 8px;
}

.compact {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

h2 {
  margin-top: 0;
}

form {
  display: grid;
  gap: 12px;
}

label {
  display: grid;
  gap: 6px;
  font-weight: 700;
}

input,
select,
button {
  width: 100%;
  min-height: 40px;
  padding: 9px 10px;
  border: 1px solid #b9c4d2;
  border-radius: 6px;
  font: inherit;
}

button {
  color: white;
  background: #1f7a5c;
  border: 0;
  cursor: pointer;
  font-weight: 700;
}

button:disabled {
  cursor: wait;
  opacity: 0.75;
}

ul {
  display: grid;
  gap: 10px;
  padding-left: 18px;
  margin-bottom: 0;
}

li {
  line-height: 1.5;
}

.list-value {
  display: block;
}

.success {
  color: #146c43;
  font-weight: 700;
}

.error {
  color: #b42318;
  font-weight: 700;
}

@media (max-width: 640px) {
  main {
    width: min(100% - 20px, 1120px);
    padding-top: 16px;
  }

  .hero {
    padding: 20px;
  }

  .hero h1 {
    font-size: 2rem;
  }
}
</style>
