export function generateUniqueString(): string {
  const timestamp: number = new Date().getTime()
  const random: string = Math.random().toString(36).slice(2, 7) // Generate a random alphanumeric string

  return `${timestamp}_${random}`
}
