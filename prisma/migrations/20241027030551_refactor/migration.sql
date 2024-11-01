/*
  Warnings:

  - You are about to drop the column `speciesId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `Species` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `species` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_speciesId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "speciesId",
ADD COLUMN     "species" TEXT NOT NULL;

-- DropTable
DROP TABLE "Species";
