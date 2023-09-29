import express, { Request, Response } from "express";
import autoresController from "./controllers/autoresController";
import livrosController from "./controllers/livrosController";
const app = express();
app.use(express.json());
const PORT = 3000;

// 1. Livros:
//POST /livros : Adiciona um novo livro.
app.post("/livros",livrosController.criar);
//GET /livros : Lista todos os livros.
app.get("/livros",livrosController.listarTodos);
//GET /livros/:id : Busca um livro pelo ID.
app.get("/livros/:id", livrosController.listarUm);
//PUT /livros/:id : Atualiza um livro pelo ID.
app.put("/livros/:id", livrosController.editar);
//DELETE /livros/:id : Deleta um livro pelo ID.
app.delete("/livros/:id", livrosController.deletar);
//GET /autores/:autorId/livros : Lista todos os livros de um autor específico.
app.get("/autores/:autorId/livros", livrosController.listarLivrosAutor);
//2. Autores:
//POST /autores : Adiciona um novo autor.
app.post("/autores", autoresController.criar);
//GET /autores : Lista todos os autores.
app.get("/autores", autoresController.listarTodos);
//GET /autores/:id : Busca um autor pelo ID.
app.get("/autores/:id", autoresController.listarUm);
//PUT /autores/:id : Atualiza um autor pelo ID.
app.put("/autores/:id",autoresController.editar);
//DELETE /autores/:id : Deleta um autor pelo ID.
app.delete("/autores/:id", autoresController.deletar);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta em http://localhost:${PORT}/ `);
});
