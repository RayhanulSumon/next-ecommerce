import { PrismaClient } from '@prisma/client';

export default function Home() {
  const prisma = new PrismaClient();
  async function getAllProducts() {
    const products = await prisma.product.findMany();
    return products;
  }
  return (
    <main className="">
      <h2>hello</h2>
    </main>
  )
}
