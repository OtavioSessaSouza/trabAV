import { Request, Response } from "express";
import { livrosSchema } from "./validationLivros";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const livrosController = {
  criar: async (req: Request, res: Response) => {
    const {titulo,descricao,dataPublicacao,ISBN,preco,autorId} = req.body
    try {
      if(titulo.length <= 255){// @max(255)
        await livrosSchema.validate({titulo,descricao,dataPublicacao,ISBN,preco,autorId});
        const livros = await prisma.livros.create({
          data:{titulo,descricao,dataPublicacao,ISBN,preco,autorId},
        });
        return res.json(livros)
      }
      else{
        return res.json(("Titulo muito grande"));
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.json(Error(error.message));
      }
    }
  },
  listarTodos: async (req:Request, res:Response) => {
    const livros = await prisma.livros.findMany();
    try {
      if(livros){
        return res.json(livros);      
      }
    }catch (error) {
      if (error instanceof Error) {
        return res.json(Error(error.message));
      }
    }

  },
  listarUm: async (req:Request, res:Response) => {
    const id = req.params.id
    try {
      return res.json(await prisma.livros.findUnique({
        where: { id: parseInt(id) },
      }));
    }catch (error) {
      if (error instanceof Error) {
        return res.json(Error(error.message));
      }
    }
  },
  listarLivrosAutor: async (req:Request, res:Response) => {
    const autorId = req.params.autorId
    try {
      return res.json(await prisma.livros.findMany({
        where: { autorId: parseInt(autorId) },
      }));
    }catch (error) {
      if (error instanceof Error) {
        return res.json(Error(error.message));
      }
    }
  },
  editar: async (req:Request, res:Response) => {
    const id = req.params.id
    const data = req.body
    try {
      return res.json(await prisma.livros.update({
        where: { id: parseInt(id) },
        data,
      }));
    }catch (error) {
      if (error instanceof Error) {
        return res.json(Error(error.message));
      }
    }

  },
  deletar: async (req:Request, res:Response) => {
    const id = req.params.id
    try {
      return res.json(await prisma.livros.delete({
        where: { id: parseInt(id) },
      }));
    }catch (error) {
      if (error instanceof Error) {
        return res.json(Error(error.message));
      }
    }
  },
};
export default livrosController;
