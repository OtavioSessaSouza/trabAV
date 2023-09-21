import * as yup from "yup";
export const livrosSchema = yup.object().shape({
  titulo: yup
    .string()
    .required("O titulo é obrigatório")
    .max(255, "O titulo deve ter menos que 255 caracteres"),
  descricao: yup.string().optional(),
  dataPublicacao: yup.string().required("A data é obrigatória"),
  ISBN: yup.string().matches(/^[0-9]{13}$/, "ISBN inválido"),
  preco: yup
    .number()
    .min(1, "Preço tem que ser positivo")
    .required("O preço é obrigatório"),
  autorId: yup.number().required("O autor id é obrigatório"),
});
