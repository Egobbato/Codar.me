import { Icon, Input } from "~/components";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object().shape({
  name: yup.string().required("Preencha seu nome"),
  username: yup.string().required("Preencha seu usuário"),
  email: yup
    .string()
    .email("Informe um email valido")
    .required("Preencha seu email"),
  password: yup.string().required("Digite sua senha"),
});

export const Signup = () => {
  const formik = useFormik({
    onsubmit: async (values) => {
      const res = await axios({
        method: "post",
        baseURL: "http://localhost:3000",
        url: "/users",
        data: values,
      });

      console.log(res.data);
    },
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
  });

  return (
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
          <img
            src="../public/logo/logo-fundo-branco.svg"
            className="w-32 md:w-40"
          ></img>
        </div>
      </header>

      <main className="container p-4 max-w-xl">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icon name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Crie a sua conta</h2>
        </div>

        <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome"
            error={formik.touched.name && formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            type="text"
            name="username"
            label="Seu nome de usuário"
            placeholder="Digite um nome de usuário"
            error={formik.touched.username && formik.errors.username}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
            error={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite uma senha"
            error={formik.touched.password && formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            type="submit"
            className=" block w-full text-white text-center bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50"
            disabled={!formik.isValid}
          >
            Criar minha conta
          </button>
        </form>
      </main>
    </div>
  );
};
