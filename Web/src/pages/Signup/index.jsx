import {Icon, Input} from '~/components'

export const Signup = () =>{
    return(
        <div>
<header className="p-4 border-b border-red-300">
    <div className="container max-w-xl flex justify-center">
        <img src="../public/logo/logo-fundo-branco.svg" className="w-32 md:w-40"></img>
    </div>
      
      </header>

      <main className="container p-4 max-w-xl">
        <div className="p-4 flex space-x-4 items-center">
            <a href="/">
            <Icon name="back" className="h-6"/>
            </a>
            <h2 className="text-xl font-bold">Crie a sua conta</h2>
        </div>
<form className="p-4 space-y-6">
    <Input
    type="text"
    name="name"
    label="Seu nome"
    placeholder="Digite seu nome"/>

<Input
    type="text"
    name="usuario"
    label="Seu nome de usuário"
    placeholder="Digite um nome de usuário"/>

<Input
    type="text"
    name="email"
    label="Seu e-mail"
    placeholder="Digite seu e-mail"/>


<Input
    type="password"
    name="senha"
    label="Sua senha"
    placeholder="Digite uma senha"/>



    <a href='/dashboard' className=" block w-full text-white text-center bg-red-500 px-6 py-3 rounded-xl  ">Criar minha conta</a>
    
</form>



      </main>
        </div>
        
    )
}