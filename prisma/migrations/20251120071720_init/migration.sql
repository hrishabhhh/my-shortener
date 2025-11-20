-- CreateTable
CREATE TABLE "shortURLS" (
    "id" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL,
    "shortCode" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shortURLS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shortURLS_shortCode_key" ON "shortURLS"("shortCode");

-- CreateIndex
CREATE INDEX "shortURLS_shortCode_idx" ON "shortURLS"("shortCode");
