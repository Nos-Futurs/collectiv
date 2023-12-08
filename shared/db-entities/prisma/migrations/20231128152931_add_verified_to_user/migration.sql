/*
  Warnings:

  - You are about to drop the `TagsOnCompanies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnEvents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnUsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnWorkingGroups` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `verified` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TagsOnCompanies" DROP CONSTRAINT "TagsOnCompanies_companyId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnCompanies" DROP CONSTRAINT "TagsOnCompanies_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnEvents" DROP CONSTRAINT "TagsOnEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnEvents" DROP CONSTRAINT "TagsOnEvents_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnUsers" DROP CONSTRAINT "TagsOnUsers_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnUsers" DROP CONSTRAINT "TagsOnUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnWorkingGroups" DROP CONSTRAINT "TagsOnWorkingGroups_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnWorkingGroups" DROP CONSTRAINT "TagsOnWorkingGroups_workingGroupId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verified" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "TagsOnCompanies";

-- DropTable
DROP TABLE "TagsOnEvents";

-- DropTable
DROP TABLE "TagsOnUsers";

-- DropTable
DROP TABLE "TagsOnWorkingGroups";

-- CreateTable
CREATE TABLE "_CompanyToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToWorkingGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToTag_AB_unique" ON "_CompanyToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToTag_B_index" ON "_CompanyToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToTag_AB_unique" ON "_EventToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToTag_B_index" ON "_EventToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToUser_AB_unique" ON "_TagToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToUser_B_index" ON "_TagToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToWorkingGroup_AB_unique" ON "_TagToWorkingGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToWorkingGroup_B_index" ON "_TagToWorkingGroup"("B");

-- AddForeignKey
ALTER TABLE "_CompanyToTag" ADD CONSTRAINT "_CompanyToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToTag" ADD CONSTRAINT "_CompanyToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToTag" ADD CONSTRAINT "_EventToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToTag" ADD CONSTRAINT "_EventToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToUser" ADD CONSTRAINT "_TagToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToUser" ADD CONSTRAINT "_TagToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToWorkingGroup" ADD CONSTRAINT "_TagToWorkingGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToWorkingGroup" ADD CONSTRAINT "_TagToWorkingGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkingGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
