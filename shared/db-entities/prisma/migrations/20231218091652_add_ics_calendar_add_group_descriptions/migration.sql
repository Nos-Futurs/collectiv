/*
  Warnings:

  - You are about to drop the column `endDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uid]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dtEnd` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dtStart` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uid` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `WorkingGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDescription` to the `WorkingGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "calendarId" INTEGER,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "dtEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dtStart" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "summary" TEXT NOT NULL,
ADD COLUMN     "uid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WorkingGroup" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "shortDescription" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Calendar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_uid_key" ON "Event"("uid");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
