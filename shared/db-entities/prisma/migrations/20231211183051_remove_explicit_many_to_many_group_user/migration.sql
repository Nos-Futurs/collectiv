/*
  Warnings:

  - You are about to drop the `WorkingGroupsOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WorkingGroupsOnUsers" DROP CONSTRAINT "WorkingGroupsOnUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "WorkingGroupsOnUsers" DROP CONSTRAINT "WorkingGroupsOnUsers_workingGroupId_fkey";

-- DropTable
DROP TABLE "WorkingGroupsOnUsers";

-- CreateTable
CREATE TABLE "_UserToWorkingGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWorkingGroup_AB_unique" ON "_UserToWorkingGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWorkingGroup_B_index" ON "_UserToWorkingGroup"("B");

-- AddForeignKey
ALTER TABLE "_UserToWorkingGroup" ADD CONSTRAINT "_UserToWorkingGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkingGroup" ADD CONSTRAINT "_UserToWorkingGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkingGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
