import { Request, Response } from "express";
import { autorSchema } from "./validationAutores";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const autoresController = {

  criar: async (req: Request, res: Response) => {// @max(255)
    const {nome,nascimento,biografia,nacionalidade} = req.body
    try {
      if(nome.length <= 255){
        await autorSchema.validate({nome,nascimento,biografia,nacionalidade});
        return res.json(await prisma.autores.create({
          data :{nome,nascimento,biografia,nacionalidade},
        }));
      }
      else{
        return res.json(("Nome muito grande"));
      }

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
  listarTodos: async (req: Request, res: Response) => {
    try {
      return res.json(await prisma.autores.findMany());
    }catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
  listarUm: async (req: Request, res: Response) => {
    const id = req.params.id
    try {
      return res.json(await prisma.autores.findUnique({
        where: { id: parseInt(id) },
      }));
    }catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }

  },
  editar: async (req: Request, res: Response) => {
    const id = req.params.id
    const data = req.body
    try {
      return res.json(await prisma.autores.update({
        where: { id: parseInt(id) },
        data,
      }));
    }catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
  deletar: async (req: Request, res: Response) => {
    const id = req.params.id
    try {
      return res.json( await prisma.autores.delete({
        where: { id: parseInt(id) },
      }));
    }catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
};
export default autoresController;
