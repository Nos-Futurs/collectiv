-- CreateTable
CREATE TABLE "PendingUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "PendingUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PendingUser_email_key" ON "PendingUser"("email");
