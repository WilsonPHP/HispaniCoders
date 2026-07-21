export type ContactPayload = {
  fullName: string
  workEmail: string
  company: string
  message: string
  website?: string
}

export type TalentRequestPayload = {
  companyName: string
  workEmail: string
  rolesNeeded: string
  timeframe: string
  details: string
}

async function postJson<TPayload>(endpoint: string, payload: TPayload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const responseBody = await response.json().catch(() => ({}))

  if (!response.ok) {
    const errorMessage =
      typeof responseBody.message === 'string' && responseBody.message.trim() !== ''
        ? responseBody.message
        : `Request failed with status ${response.status}`

    throw new Error(errorMessage)
  }

  const isValidSuccessResponse =
    typeof responseBody === 'object' &&
    responseBody !== null &&
    'ok' in responseBody &&
    responseBody.ok === true

  if (!isValidSuccessResponse) {
    throw new Error('Invalid API response. Please verify the PHP endpoint is running.')
  }

  return responseBody
}

export function submitContact(payload: ContactPayload) {
  return postJson('/api/contact.php', payload)
}

export function submitTalentRequest(payload: TalentRequestPayload) {
  return postJson('/api/request-talent.php', payload)
}