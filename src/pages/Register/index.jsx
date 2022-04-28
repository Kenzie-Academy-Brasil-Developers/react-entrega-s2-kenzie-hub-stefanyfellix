import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import KenzieHub from "../../components/img/KenzieHub.png";
import { ContainerRegister, Div, Formstyled, HeaderRegister } from "./style";

import { toast } from "react-toastify";

import api from "../../services/api";

const Register = ({ authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    bio: yup
      .string()
      .required("Campo obrigatório!")
      .max(113, "Limite de caracteres 113"),
    contact: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
        "deve conter ao menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número "
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);

    api
      .post("/users", data)
      .then((_) => {
        toast.success("Conta criada com sucesso! Volte a pagina de login");
      })
      .catch((err) => toast.error("Erro ao criar a conta. Tente novamente!"));
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <ContainerRegister>
      <HeaderRegister>
        <img src={KenzieHub} />
        <button onClick={() => history.push("/")}>Sair</button>
      </HeaderRegister>
      <Div>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa.</p>
        <Formstyled onSubmit={handleSubmit(onSubmit)}>
          <label>Nome</label>
          <input placeholder="Digite seu nome aqui" {...register("name")} />
          <span>{errors.name?.message}</span>

          <label>Email</label>
          <input placeholder="Digite seu melhor email" {...register("email")} />
          <span>{errors.email?.message}</span>

          <label>Bio</label>
          <input
            placeholder="Escreva um pouco sobre você!"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>

          <label>Contato</label>
          <input
            placeholder="Coloque aqui o endereço do seu linkedin"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>

          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label>Confirmar da senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>

          <label> Selecione o módulo</label>
          <select {...register("course_module")}>
            <option selected>Módulo</option>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto modulo (Backend Avançado)</option>
          </select>
          <span>{errors.course_module?.message}</span>
          <button type="submit">Cadastrar</button>
        </Formstyled>
      </Div>
    </ContainerRegister>
  );
};
export default Register;
