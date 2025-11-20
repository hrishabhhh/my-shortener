// lib/prisma.ts

import { PrismaClient } from '@prisma/client'
// Add a global variable declaration to avoid TypeScript errors in development
declare global {
  var prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  // In production, instantiate the client normally
  prisma = new PrismaClient()
} else {
  // In development, store the client on the global object to reuse it
  // and prevent hot-reloading from creating new instances on every reload.
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma