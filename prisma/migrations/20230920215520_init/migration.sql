-- CreateTable
CREATE TABLE "Livros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataPublicacao" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "autorId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Livros_ISBN_key" ON "Livros"("ISBN");
