/*
  Warnings:

  - You are about to drop the column `affiliationId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `Affiliation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `affiliation` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_affiliationId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "affiliationId",
ADD COLUMN     "affiliation" TEXT NOT NULL;

-- DropTable
DROP TABLE "Affiliation";
