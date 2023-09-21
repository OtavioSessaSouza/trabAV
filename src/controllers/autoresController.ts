import { autorSchema } from "./validationAutores";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const autoresController = {
  criar: async (data: any) => {
    try {
      await autorSchema.validate(data);
      return await prisma.autores.create({
        data,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
  listarTodos: async () => {
    return await prisma.autores.findMany();
  },
  listarUm: async (id: string) => {
    return await prisma.autores.findUnique({
      where: { id: parseInt(id) },
    });
  },
  editar: async (id: string, data: any) => {
    return await prisma.autores.update({
      where: { id: parseInt(id) },
      data,
    });
  },
  deletar: async (id: string) => {
    return await prisma.autores.delete({
      where: { id: parseInt(id) },
    });
  },
};
export default autoresController;
