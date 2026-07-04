export function formatAmount(amount) {
  const value = Number(amount)

  if (amount === null || amount === undefined || amount === '') {
    return '-'
  }

  if (Number.isNaN(value)) {
    return amount
  }

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)
}

export function formatType(type) {
  if (type === 'INCOME') return 'Einnahme'
  if (type === 'EXPENSE') return 'Ausgabe'
  return type || '-'
}

export function formatDate(date) {
  if (!date) return '-'

  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return date
  }

  return new Intl.DateTimeFormat('de-DE').format(parsedDate)
}
