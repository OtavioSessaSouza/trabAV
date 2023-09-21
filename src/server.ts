import express, { Request, Response } from "express";
import autoresController from "./controllers/autoresController";
import livrosController from "./controllers/livrosController";
const app = express();
app.use(express.json());
const PORT = 3000;

// 1. Livros:
//POST /livros : Adiciona um novo livro.
app.post("/livros", (req: Request, res: Response) => {
  livrosController
    .criar(req.body)
    .then((result: any) => res.json(result))
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});
//GET /livros : Lista todos os livros.
app.get("/livros", (req: Request, res: Response) => {
  livrosController
    .listarTodos()
    .then((result: any) => res.json(result))
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});
//GET /livros/:id : Busca um livro pelo ID.
app.get("/livros/:id", (req: Request, res: Response) => {
  livrosController
    .listarUm(req.params.id)
    .then((result: any) => res.json(result))
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});
//PUT /livros/:id : Atualiza um livro pelo ID.
app.put("/livros/:id", (req: Request, res: Response) => {
  livrosController
    .editar(req.params.id, req.body)
    .then((result: any) => res.json(result))
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});
//DELETE /livros/:id : Deleta um livro pelo ID.
app.delete("/livros/:id", (req: Request, res: Response) => {
  livrosController
    .deletar(req.params.id)
    .then((result: any) => res.json(result))
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});
//GET /autores/:autorId/livros : Lista todos os livros de um autor específico.
app.get("/autores/:autorId/livros", (req: Request, res: Response) => {
  livrosController
    .listarLivrosAutor(req.params.autorId)
    .then((result: any) => res.json(result))
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});
//2. Autores:
//POST /autores : Adiciona um novo autor.
app.post("/autores", (req: Request, res: Response) => {
  autoresController
    .criar(req.body)
    .then((result: any) => res.json(result))
    .catch((error: any) => {
      res.status(400).json({ message: error.message });
    });
});
//GET /autores : Lista todos os autores.
app.get("/autores", (req: Request, res: Response) => {
  autoresController
    .listarTodos()
    .then((result: any) => res.json(result))
    .catch((error: any) => res.status(400).json(error));
});
//GET /autores/:id : Busca um autor pelo ID.
app.get("/autores/:id", (req: Request, res: Response) => {
  autoresController
    .listarUm(req.params.id)
    .then((result: any) => res.json(result))
    .catch((error: any) => res.status(400).json(error));
});
//PUT /autores/:id : Atualiza um autor pelo ID.
app.put("/autores/:id", (req: Request, res: Response) => {
  autoresController
    .editar(req.params.id, req.body)
    .then((result: any) => res.json(result))
    .catch((error: any) => res.status(400).json(error));
});
//DELETE /autores/:id : Deleta um autor pelo ID.
app.delete("/autores/:id", (req: Request, res: Response) => {
  autoresController
    .deletar(req.params.id)
    .then((result: any) => res.json(result))
    .catch((error: any) => res.status(400).json(error));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta em http://localhost:${PORT}/ `);
});
