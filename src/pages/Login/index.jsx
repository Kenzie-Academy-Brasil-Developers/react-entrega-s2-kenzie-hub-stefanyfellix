import { useHistory } from "react-router-dom";
import { Container, Content, Form, RegisterDiv } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import KenzieHub from "../../components/img/KenzieHub.png";
import api from "../../services/api";
import { Redirect } from "react-router-dom";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
        "deve conter ao menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número "
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        console.log(user);

        setAuthenticated(true);

        return history.push(`/home/${response.data.user.name}`);
      })
      .catch((_) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Content>
      <header>
        <img src={KenzieHub} />
      </header>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input placeholder="Digite aqui seu email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <button type="submit">Entrar</button>
        </Form>
        <RegisterDiv className="register">
          <span>Ainda não possui uma conta?</span>
          <button
            onClick={() => {
              history.push("/register");
            }}
          >
            Cadastre-se
          </button>
        </RegisterDiv>
      </Container>
    </Content>
  );
};
export default Login;
