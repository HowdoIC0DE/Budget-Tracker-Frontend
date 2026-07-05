<script setup>
import { ref } from 'vue'
import DashboardOverview from './components/DashboardOverview.vue'
import TransactionForm from './components/TransactionForm.vue'
import TransactionList from './components/TransactionList.vue'
import CategoryForm from './components/CategoryForm.vue'
import CategoryList from './components/CategoryList.vue'
import AccountForm from './components/AccountForm.vue'
import AccountList from './components/AccountList.vue'
import BudgetForm from './components/BudgetForm.vue'
import BudgetList from './components/BudgetList.vue'
import GoalContributionForm from './components/GoalContributionForm.vue'
import GoalContributionList from './components/GoalContributionList.vue'
import RecurringTransactionList from './components/RecurringTransactionList.vue'
import SavingsGoalForm from './components/SavingsGoalForm.vue'
import SavingsGoalList from './components/SavingsGoalList.vue'
import PaymentMethodList from './components/PaymentMethodList.vue'
import MerchantList from './components/MerchantList.vue'
import TagForm from './components/TagForm.vue'
import TagList from './components/TagList.vue'

const dashboardKey = ref(0)
const transactionListKey = ref(0)
const categoryListKey = ref(0)
const accountListKey = ref(0)
const budgetListKey = ref(0)
const savingsGoalListKey = ref(0)
const goalContributionListKey = ref(0)
const tagListKey = ref(0)

function refreshTransactionData() {
  dashboardKey.value += 1
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

function refreshSavingsGoalList() {
  savingsGoalListKey.value += 1
}

function refreshGoalContributionData() {
  goalContributionListKey.value += 1
  savingsGoalListKey.value += 1
}

function refreshTagList() {
  tagListKey.value += 1
}
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-mark">BT</span>
        <div>
          <strong>Budget Tracker</strong>
          <small>Finance Dashboard</small>
        </div>
      </div>

      <nav class="side-nav" aria-label="Hauptnavigation">
        <a href="#dashboard">Dashboard</a>
        <a href="#transaktionen">Transaktionen</a>
        <a href="#geld-verwalten">Geld verwalten</a>
        <a href="#planung">Planung</a>
        <a href="#organisation">Organisation</a>
      </nav>
    </aside>

    <main class="dashboard-main">
      <section id="dashboard" class="hero-section">
        <div class="hero-copy">
          <p class="eyebrow">WebTech Projekt</p>
          <h1>Budget Tracker</h1>
          <p>
            Ein kompaktes Finanz-Dashboard für Transaktionen, Geldverwaltung, Planung und Tags.
          </p>
          <div class="hero-actions" aria-label="Projektstatus">
            <span class="status-pill online">Backend verbunden</span>
            <span class="status-pill">Vue 3 + Vite</span>
          </div>
        </div>

        <DashboardOverview :key="dashboardKey" />
      </section>

      <section id="transaktionen" class="dashboard-section">
        <div class="section-header">
          <div>
            <span class="section-kicker">Wichtigster Ablauf</span>
            <h2>Transaktionen</h2>
          </div>
          <p>Einnahmen und Ausgaben mit Kategorie, Konto, Zahlungsart, Händler und Notiz erfassen.</p>
        </div>

        <div class="panel-grid transaction-grid">
          <TransactionForm class="priority-card" @saved="refreshTransactionData" />
          <TransactionList :key="transactionListKey" class="wide-card" />
        </div>
      </section>

      <section id="geld-verwalten" class="dashboard-section">
        <div class="section-header">
          <div>
            <span class="section-kicker">Stammdaten</span>
            <h2>Geld verwalten</h2>
          </div>
          <p>Kategorien, Konten, Zahlungsarten und Händler bilden die Grundlage der Buchungen.</p>
        </div>

        <div class="panel-grid management-grid">
          <CategoryForm @saved="refreshCategoryList" />
          <CategoryList :key="categoryListKey" />
          <AccountForm @saved="refreshAccountList" />
          <AccountList :key="accountListKey" />
          <PaymentMethodList />
          <MerchantList />
        </div>
      </section>

      <section id="planung" class="dashboard-section">
        <div class="section-header">
          <div>
            <span class="section-kicker">Planung</span>
            <h2>Planung</h2>
          </div>
          <p>Budgets, Sparziele, Einzahlungen und wiederkehrende Zahlungen zusammen planen.</p>
        </div>

        <div class="panel-grid planning-grid">
          <BudgetForm @saved="refreshBudgetList" />
          <BudgetList :key="budgetListKey" />
          <SavingsGoalForm @saved="refreshSavingsGoalList" />
          <SavingsGoalList :key="savingsGoalListKey" />
          <GoalContributionForm @saved="refreshGoalContributionData" />
          <GoalContributionList :key="goalContributionListKey" />
          <RecurringTransactionList />
        </div>
      </section>

      <section id="organisation" class="dashboard-section">
        <div class="section-header">
          <div>
            <span class="section-kicker">Organisation</span>
            <h2>Tags</h2>
          </div>
          <p>Tags helfen, Transaktionen später zusätzlich zu gruppieren.</p>
        </div>

        <div class="panel-grid organisation-grid">
          <TagForm @saved="refreshTagList" />
          <TagList :key="tagListKey" />
        </div>
      </section>
    </main>
  </div>
</template>

<style>
:root {
  color: #e5eef9;
  background: #080d16;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --bg: #080d16;
  --panel: #101827;
  --panel-strong: #162133;
  --panel-soft: #0d1420;
  --border: rgba(148, 163, 184, 0.2);
  --border-strong: rgba(148, 163, 184, 0.32);
  --text: #e5eef9;
  --muted: #91a0b8;
  --muted-strong: #b7c3d7;
  --green: #35d399;
  --green-dark: #15936a;
  --red: #fb7185;
  --blue: #60a5fa;
  --purple: #a78bfa;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  margin: 0;
  color: var(--text);
  background:
    linear-gradient(180deg, rgba(35, 49, 75, 0.3), rgba(8, 13, 22, 0) 360px),
    var(--bg);
}

a {
  color: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  align-self: start;
  display: grid;
  gap: 28px;
  height: 100vh;
  padding: 28px 20px;
  background: rgba(8, 13, 22, 0.86);
  border-right: 1px solid var(--border);
  backdrop-filter: blur(16px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: inline-grid;
  width: 42px;
  height: 42px;
  place-items: center;
  color: #07110d;
  background: var(--green);
  border-radius: 8px;
  font-weight: 900;
}

.brand strong,
.brand small {
  display: block;
}

.brand small {
  margin-top: 2px;
  color: var(--muted);
}

.side-nav {
  display: grid;
  gap: 8px;
}

.side-nav a {
  padding: 11px 12px;
  color: var(--muted-strong);
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 8px;
}

.side-nav a:hover,
.side-nav a:focus-visible {
  color: var(--text);
  background: rgba(96, 165, 250, 0.1);
  border-color: var(--border);
  outline: none;
}

.dashboard-main {
  width: min(1220px, 100%);
  padding: 28px;
}

.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(360px, 1fr);
  gap: 20px;
  align-items: stretch;
  margin-bottom: 34px;
}

.hero-copy {
  display: grid;
  align-content: center;
  min-height: 300px;
  padding: 30px;
  background:
    linear-gradient(135deg, rgba(53, 211, 153, 0.14), rgba(96, 165, 250, 0.1)),
    var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.hero-copy h1 {
  margin: 8px 0 12px;
  font-size: clamp(2.2rem, 5vw, 4.6rem);
  line-height: 0.95;
  letter-spacing: 0;
}

.hero-copy p {
  max-width: 700px;
  margin: 0;
  color: var(--muted-strong);
  font-size: 1.05rem;
  line-height: 1.7;
}

.eyebrow,
.section-kicker,
.metric-label {
  margin: 0;
  color: var(--green);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.status-pill,
.badge,
.meta-pill {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 28px;
  padding: 5px 10px;
  color: var(--muted-strong);
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 800;
}

.status-pill.online,
.badge.income,
.meta-pill.income {
  color: #a7f3d0;
  background: rgba(53, 211, 153, 0.13);
  border-color: rgba(53, 211, 153, 0.35);
}

.badge.expense,
.meta-pill.expense {
  color: #fecdd3;
  background: rgba(251, 113, 133, 0.13);
  border-color: rgba(251, 113, 133, 0.35);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.metric-card {
  display: grid;
  align-content: space-between;
  min-height: 143px;
  padding: 20px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.metric-card strong {
  margin-top: 18px;
  font-size: clamp(1.6rem, 3vw, 2.35rem);
  line-height: 1;
}

.metric-card small {
  margin-top: 8px;
  color: var(--red);
}

.metric-card.income {
  border-color: rgba(53, 211, 153, 0.35);
}

.metric-card.expense {
  border-color: rgba(251, 113, 133, 0.35);
}

.metric-card.balance {
  border-color: rgba(96, 165, 250, 0.35);
}

.metric-card.count {
  border-color: rgba(167, 139, 250, 0.35);
}

.dashboard-section {
  margin-top: 34px;
  scroll-margin-top: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  margin-bottom: 16px;
}

.section-header h2 {
  margin: 4px 0 0;
  font-size: clamp(1.55rem, 3vw, 2.25rem);
}

.section-header p {
  max-width: 460px;
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 16px;
}

.transaction-grid {
  grid-template-columns: minmax(280px, 0.8fr) minmax(420px, 1.2fr);
}

.management-grid,
.planning-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.organisation-grid {
  grid-template-columns: minmax(280px, 0.8fr) minmax(320px, 1.2fr);
}

.panel-grid > section,
.priority-card,
.wide-card {
  min-width: 0;
  padding: 20px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0)),
    var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.priority-card {
  border-color: rgba(53, 211, 153, 0.36);
}

h2 {
  margin-top: 0;
}

section > h2 {
  margin-bottom: 14px;
  font-size: 1.15rem;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: start;
  margin-bottom: 14px;
}

.card-title-row h2 {
  margin: 0;
}

form {
  display: grid;
  gap: 13px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

label {
  display: grid;
  gap: 7px;
  color: var(--muted-strong);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

input,
select,
button {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  color: var(--text);
  background: #0b1220;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  font: inherit;
}

input::placeholder {
  color: #61708a;
}

select {
  color: var(--text);
}

input:focus,
select:focus {
  border-color: rgba(53, 211, 153, 0.7);
  box-shadow: 0 0 0 3px rgba(53, 211, 153, 0.12);
  outline: none;
}

button {
  color: #03130d;
  background: linear-gradient(180deg, #45e1a8, var(--green));
  border: 0;
  cursor: pointer;
  font-weight: 900;
  letter-spacing: 0;
  box-shadow: 0 12px 26px rgba(53, 211, 153, 0.22);
}

button:hover {
  transform: translateY(-1px);
}

button:disabled {
  cursor: wait;
  opacity: 0.75;
  transform: none;
}

ul {
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  line-height: 1.5;
}

.success,
.error {
  margin: 14px 0 0;
  padding: 10px 12px;
  border-radius: 8px;
  font-weight: 800;
}

.success {
  color: #a7f3d0;
  background: rgba(53, 211, 153, 0.12);
  border: 1px solid rgba(53, 211, 153, 0.28);
}

.error {
  color: #fecdd3;
  background: rgba(251, 113, 133, 0.12);
  border: 1px solid rgba(251, 113, 133, 0.28);
}

.empty-state,
.loading-state {
  margin: 0;
  padding: 18px;
  color: var(--muted);
  background: rgba(148, 163, 184, 0.07);
  border: 1px dashed var(--border-strong);
  border-radius: 8px;
}

.transaction-list,
.entity-list {
  display: grid;
  gap: 10px;
}

.transaction-row,
.entity-row {
  display: grid;
  gap: 12px;
  padding: 14px;
  background: var(--panel-soft);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.transaction-row {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
}

.entity-row {
  align-content: start;
}

.entity-main strong,
.transaction-main strong {
  display: block;
  color: var(--text);
}

.entity-main small,
.transaction-main small {
  display: block;
  margin-top: 4px;
  color: var(--muted);
}

.entity-meta,
.transaction-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.meta-pill {
  gap: 6px;
}

.meta-pill > span {
  color: var(--muted);
  font-weight: 700;
}

.meta-pill > strong {
  color: var(--text);
}

.transaction-meta span,
.transaction-note {
  width: fit-content;
  margin: 0;
  padding: 4px 8px;
  color: var(--muted-strong);
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
}

.transaction-note {
  margin-top: 8px;
  border-radius: 8px;
}

.transaction-amount {
  display: grid;
  justify-items: end;
  gap: 6px;
  font-weight: 900;
}

.transaction-amount.income {
  color: var(--green);
}

.transaction-amount.expense {
  color: var(--red);
}

@media (max-width: 1020px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    height: auto;
    padding: 16px;
  }

  .side-nav {
    grid-template-columns: repeat(5, minmax(max-content, 1fr));
    overflow-x: auto;
    padding-bottom: 4px;
  }

  .dashboard-main {
    padding: 20px 16px 36px;
  }

  .hero-section,
  .transaction-grid,
  .organisation-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .brand {
    align-items: flex-start;
  }

  .side-nav {
    grid-template-columns: repeat(5, max-content);
  }

  .hero-copy {
    min-height: auto;
    padding: 22px;
  }

  .overview-grid,
  .panel-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    display: grid;
    gap: 8px;
    align-items: start;
  }

  .transaction-row {
    grid-template-columns: 1fr;
  }

  .transaction-amount {
    justify-items: start;
  }
}
</style>
