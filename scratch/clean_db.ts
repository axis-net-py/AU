import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Cleaning database of mock data...')
  try {
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE "InventoryMovement", "InvoiceItem", "CommercialInvoice", "Product", "Customer", "Supplier", "ExchangeRate" CASCADE;`
    )
    console.log('Database successfully cleaned!')
  } catch (err) {
    console.error('Error cleaning database:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()
