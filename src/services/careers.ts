export async function submitCV(data: {
  fullName: string
  email: string
  phone: string
  website?: string
  cv: File
}): Promise<{ ok: boolean; message: string }> {
  const formData = new FormData()
  formData.append('fullName', data.fullName)
  formData.append('email', data.email)
  formData.append('phone', data.phone)
  formData.append('website', data.website || '')
  formData.append('cv', data.cv)

  const response = await fetch('/api/upload-cv.php', {
    method: 'POST',
    body: formData,
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit CV')
  }

  return result
}
