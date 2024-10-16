/*
  Warnings:

  - You are about to alter the column `population` on the `Planet` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Planet" ALTER COLUMN "population" SET DATA TYPE INTEGER;
