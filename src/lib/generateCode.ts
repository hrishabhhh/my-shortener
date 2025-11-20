// src/lib/generateCode.ts
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 7)

export function generateShortCode() {
  return nanoid() // → e.g., "aB3k9pM"
}