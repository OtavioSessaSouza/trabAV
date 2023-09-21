import { livrosSchema } from "./validationLivros";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const livrosController = {
  criar: async (data: any) => {
    try {
      await livrosSchema.validate(data);
      return await prisma.livros.create({
        data,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
  listarTodos: async () => {
    return await prisma.livros.findMany();
  },
  listarUm: async (id: string) => {
    return await prisma.livros.findUnique({
      where: { id: parseInt(id) },
    });
  },
  listarLivrosAutor: async (autorId: string) => {
    return await prisma.livros.findMany({
      where: { autorId: parseInt(autorId) },
    });
  },
  editar: async (id: string, data: any) => {
    return await prisma.livros.update({
      where: { id: parseInt(id) },
      data,
    });
  },
  deletar: async (id: string) => {
    return await prisma.livros.delete({
      where: { id: parseInt(id) },
    });
  },
};
export default livrosController;
