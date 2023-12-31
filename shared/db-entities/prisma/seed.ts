import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

// TODO: Implement a way to truncate all tables instead of dropping the DB which is SLOW when testing

async function main(): Promise<void> {
  await prisma.user.create({
    data: {
      "email": "admin@cho.com",
      "firstName": "chocolat",
      "lastName": "cho",
      "password": "Admin1234!",
      "description": "first api test",
      "region": "manche",
      "validated": true,
      "verified": true,
      "role": "ADMIN"
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // TODO: replace with logger
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
