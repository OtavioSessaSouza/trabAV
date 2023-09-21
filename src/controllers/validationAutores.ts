import * as yup from "yup";
export const autorSchema = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  nascimento: yup.string().required("A data é obrigatória"),
  biografia: yup.string().optional(),
  nacionalidade: yup
    .string()
    .required("A nacionalidade é obrigatório")
    .min(3, "a nacionalidade deve ter pelo menos 3 caracteres"),
});

