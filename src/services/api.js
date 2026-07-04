export const API_BASE_URL = 'https://budget-tracker-webtech.onrender.com'

export async function apiRequest(path, options = {}) {
  const headers = {
    ...options.headers
  }

  if (options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers
  })

  if (!response.ok) {
    throw new Error(`Anfrage fehlgeschlagen (${response.status})`)
  }

  if (response.status === 204) {
    return null
  }

  const text = await response.text()
  return text ? JSON.parse(text) : null
}

export function getItems(path) {
  return apiRequest(path)
}

export function createItem(path, data) {
  return apiRequest(path, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
